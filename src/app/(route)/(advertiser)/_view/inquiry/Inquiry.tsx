'use client'
import { SectionLayout } from '@/components'
import { useEffect, useState } from 'react'
import InquiryRadio from './components/InquiryRadio'
import InquiryInput from './components/InquiryInput'
import { useEmailCheck, usePhoneCheck } from '@/hooks'
import CustomImage from '@/components/custom-image/CustomImage'

function Inquiry() {
  const { checkPhone } = usePhoneCheck()
  const { checkEmail } = useEmailCheck()
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [radioChecked, setRadioChecked] = useState<string | null>(null)
  const [agreeChecked, setAgreeChecked] = useState(false)
  const [screenWidth, setScreenWidth] = useState<number | null>(null)

  const isButtonDisabled = !company || !name || !phone || !email || !radioChecked || !agreeChecked
  const handleRadioChange = (name: string) => {
    setRadioChecked(name)
  }

  const handleChecked = () => {
    if (!checkPhone(phone)) {
      alert('잘못된 번호 형식입니다.')
      return
    }
    if (!checkEmail(email)) {
      alert('잘못된 이메일 형식입니다.')
      return
    }

    setCompany('')
    setName('')
    setPhone('')
    setEmail('')
    setRadioChecked(null)
    setAgreeChecked(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const radioBox = [
    { name: 'naver', title: '네이버 검색' },
    { name: 'instar', title: '인스타그램 광고' },
    { name: 'Reviews', title: '후기' },
    { name: 'suggest', title: '지인 추천' },
    { name: 'introduction', title: '와이리 직원의 소개' },
    { name: 'etc', title: '기타' },
  ]

  return (
    <div className="w-full bg-gray-600 ">
      <SectionLayout>
        <div className=" flex flex-col items-center primary:pt-[3.125rem] mobile:pt-[6.67vw] pt-[15.56vw] primary:pb-[3.75rem] mobile:pb-[8vw] pb-[16.67vw] primary:px-[3.25rem] mobile:px-[6.93vw] px-[6.94vw]  primary:gap-[1.625rem] mobile:gap-[3.47vw] gap-[6.67vw]">
          <div className="flex flex-col text-center primary:gap-[0.375rem] mobile:gap-[0.8vw] gap-[3.89vw] ">
            <h1 className="text-white-default primary:text-[1.531rem] mobile:text-[3.27vw] text-[6.67vw] primary:leading-[2rem] leading-[4.27vw]">
              문의하기
            </h1>
            <span className="primary:text-[0.875rem] mobile:text-[1.87vw] text-[3.89vw] text-gray-100 whitespace-pre-line">
              {`저희 와이리를 찾아주셔서 감사합니다.${screenWidth! < 500 ? `\n` : ``} 연락처와 함께 아래 항목 작성해주시면,\n담당자 확인 후 상담 도와드리도록 하겠습니다.`}
            </span>
          </div>
          <div className="flex flex-col w-full  items-center primary:gap-[1.875rem] mobile:gap-[4vw] gap-[8.33vw]">
            <div className="mobile:grid mobile:grid-cols-2 flex flex-col w-full primary:gap-x-[1.563rem] mobile:gap-x-[3.33vw] primary:gap-y-[2.5rem] mobile:gap-y-[5.33vw] gap-[2.22vw] ">
              <InquiryInput title="회사명" name="Company" value={company} setValue={setCompany} />
              <InquiryInput title="담당자명" name="name" value={name} setValue={setName} />
              <InquiryInput title="담당자 연락처" name="phone" value={phone} setValue={setPhone} />
              <InquiryInput title="담당자 이메일" name="email" value={email} setValue={setEmail} />
            </div>
            <div className="flex flex-col w-full items-center primary:gap-3 mobile:gap-[1.6vw] gap-[3.89vw]">
              <span className="text-white-default primary:text-[0.906rem] mobile:text-[1.93vw] text-[3.89vw]">
                와이리를 어떻게 알게 되셨나요?
              </span>
              <div className="mobile:flex grid grid-cols-[auto_auto_auto] mobile:justify-between w-full gap-y-[3.89vw]">
                {radioBox.map(radio => (
                  <InquiryRadio
                    key={radio.name}
                    title={radio.title}
                    name={radio.name}
                    radioChecked={radioChecked === radio.name}
                    handleRadioChange={handleRadioChange}
                  />
                ))}
              </div>
            </div>
            <div
              className="flex primary:gap-1.5 mobile:gap-[0.8vw] gap-[1.11vw] cursor-pointer  "
              onClick={() => setAgreeChecked(!agreeChecked)}>
              <input
                type="checkbox"
                className="appearance-none primary:w-[0.875rem] mobile:w-[1.87vw] w-[3.89vw] primary:h-[0.875rem] mobile:h-[1.87vw] h-[3.89vw] rounded-[50%] bg-gray-300 cursor-pointer"
                defaultChecked={agreeChecked}
              />
              {agreeChecked && (
                <div className="absolute ">
                  <CustomImage
                    src="/icons/plan_true_white.svg"
                    w="primary:w-[0.875rem] mobile:w-[1.87vw] w-[3.89vw]"
                    h="primary:h-[0.875rem] mobile:h-[1.87vw] h-[3.89vw]"
                    alt="checked"
                    bgColor="bg-primary-default"
                    rounded="rounded-[50%]"
                  />
                </div>
              )}
              <span
                className={`primary:text-[0.75rem] mobile:text-[1.6vw] text-[3.33vw] primary:leading-[1rem] mobile:leading-[2.13vw] leading-[3.89vw] ${agreeChecked ? 'text-white-default' : 'text-gray-200'}`}>
                개인 정보 수집 및 이용에 동의합니다.
              </span>
            </div>
          </div>
          <div className="flex w-full ">
            <button
              className={`w-full  primary:py-[0.375rem] mobile:py-[0.8vw] py-[1.11vw] rounded-[3.125rem] primary:text-[0.813rem] mobile:text-[1.73vw] text-[3.33vw] ${isButtonDisabled ? 'text-gray-200 bg-gray-300 ' : 'text-white-default bg-black hover:bg-gray-default'}`}
              disabled={isButtonDisabled}
              onClick={handleChecked}>
              문의하기
            </button>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
export default Inquiry
