'use client'
import { SectionLayout } from '@/components'
import { useState } from 'react'
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
        <div className=" flex flex-col items-center primary:pt-[3.125rem] pt-[6.67vw] primary:pb-[3.75rem] pb-[8vw] primary:gap-[1.625rem] gap-[3.47vw]">
          <div className="flex flex-col text-center primary:gap-[0.375rem] gap-[0.8vw] ">
            <h1 className="text-white-default primary:text-[1.531rem] text-[3.27vw] primary:leading-[2rem] leading-[4.27vw]">
              문의하기
            </h1>
            <span className="primary:text-[0.875rem] text-[1.87vw] text-gray-100 whitespace-pre-line">
              {`저희 와이리를 찾아주셔서 감사합니다. 연락처와 함께 아래 항목 작성해주시면,\n담당자 확인 후 상담 도와드리도록 하겠습니다.`}
            </span>
          </div>
          <div className="flex flex-col  items-center primary:gap-[1.875rem] gap-[4vw] ">
            <div className="grid grid-cols-2 primary:gap-x-[1.563rem] gap-x-[3.33vw] primary:gap-y-[2.5rem] gap-y-[5.33vw] ">
              <InquiryInput title="회사명" name="Company" value={company} setValue={setCompany} />
              <InquiryInput title="담당자명" name="name" value={name} setValue={setName} />
              <InquiryInput title="담당자 연락처" name="phone" value={phone} setValue={setPhone} />
              <InquiryInput title="담당자 이메일" name="email" value={email} setValue={setEmail} />
            </div>
            <div className="flex flex-col w-full items-center primary:gap-3 gap-[1.6vw]">
              <span className="text-white-default primary:text-[0.906rem] text-[1.93vw]">
                와이리를 어떻게 알게 되셨나요?
              </span>
              <div className="flex justify-between w-full">
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
              className="flex primary:gap-1.5 gap-[0.8vw] cursor-pointer  "
              onClick={() => setAgreeChecked(!agreeChecked)}>
              <input
                type="checkbox"
                className="appearance-none primary:w-[0.875rem] w-[1.87vw] primary:h-[0.875rem] h-[1.87vw] rounded-[50%] bg-gray-300 cursor-pointer"
                defaultChecked={agreeChecked}
              />
              {agreeChecked && (
                <div className="absolute ">
                  <CustomImage
                    src="/icons/plan_true_white.svg"
                    w="primary:w-[0.875rem] w-[1.87vw]"
                    h="primary:h-[0.875rem] h-[1.87vw]"
                    alt="checked"
                    bgColor="bg-primary-default"
                    rounded="rounded-[50%]"
                  />
                </div>
              )}
              <span
                className={`primary:text-[0.75rem] text-[1.6vw] primary:leading-[1rem] leading-[2.13vw] ${agreeChecked ? 'text-white-default' : 'text-gray-200'}`}>
                개인 정보 수집 및 이용에 동의합니다.
              </span>
            </div>
          </div>
          <div className="flex w-full primary:px-[3.438rem] px-[7.33vw]">
            <button
              className={`w-full  primary:py-[0.375rem] py-[0.8vw] rounded-[3.125rem] primary:text-[0.813rem] text-[1.73vw] ${isButtonDisabled ? 'text-gray-200 bg-gray-300 ' : 'text-white-default bg-black hover:bg-gray-default'}`}
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
