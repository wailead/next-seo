import CustomImage from '@/components/custom-image/CustomImage'
import { useEffect, useState } from 'react'

interface Props {
  showModal: boolean
  handleModalOpen: () => void
}

function CampaignModal({ handleModalOpen, showModal }: Props) {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(showModal)
  }, [showModal])

  const handleModalClose = () => {
    setAnimation(false)
    setTimeout(() => {
      handleModalOpen()
    }, 150)
  }

  if (!animation) return null

  return (
    <dialog
      className={`flex w-full h-full fixed top-0 left-0 justify-center items-center bg-black/50 z-40 ${animation ? 'animate-fadein' : 'animate-fadeout pointer-events-none'}`}
      onClick={handleModalClose}>
      <div
        className="flex flex-col primary:w-[36.5rem] w-[77.87vw] primary:h-[26.25rem] h-[56vw] bg-[url('/images/influencer/background.png')] bg-cover rounded-[1.875rem] justify-between items-center primary:pt-[1.15rem] pt-[2.45vw] primary:px-[1.22rem] px-[2.6vw]"
        onClick={e => {
          e.stopPropagation()
        }}>
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-end">
            <button onClick={handleModalClose}>
              {/* svg파일은 반응형 작업 안해도 되는듯 합니다.*/}
              <CustomImage src={'/icons/influencer/close.svg'} alt="close" w="w-[1.469rem]" h="h-[1.469rem]" />
            </button>
          </div>
          <div className="flex flex-col primary:w-[16.25rem] w-[34.67vw] top-0 items-center primary:gap-2.5 gap-[1.33vw]">
            <span className="font-bold primary:text-[1.313rem] text-[2.80vw] primary:leading-[1.875rem] leading-[4vw] text-gray-600">
              와이리 앱에서 더 많은 캠페인을 확인할 수 있어요!
            </span>
            {/* svg파일은 반응형 작업 안해도 되는듯 합니다.*/}
            <CustomImage src={'/assets/images/polygon.png'} alt="polygon" w="w-[0.6rem]" h="h-[0.35rem]" />
          </div>
        </div>
        <div className="flex primary:gap-[0.625rem] gap-[1.33vw]">
          <div className="flex flex-col w-fit primary:gap-3 gap-[1.6vw] primary:pl-[1.4375rem] pl-[3.07vw]">
            <div className="flex primary:gap-[0.9rem] gap-[1.92vw] primary:pt-[3.625rem] pt-[7.73vw]">
              <div className="flex flex-col bg-white-default primary:px-[0.96875rem] px-[2.07vw] primary:py-[1rem]  py-[2.13vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <CustomImage
                  src="/images/qr_appstore.png"
                  alt="appleQR"
                  w="primary:w-[5.5625rem] w-[11.87vw]"
                  h="primary:h-[5.5625rem] h-[11.87vw]"
                />
                <div className="flex items-center primary:gap-[0.438rem] gap-[0.93vw]">
                  <CustomImage
                    src={'/icons/gray_apple.svg'}
                    alt="applelogo"
                    w="primary:w-[0.78125rem] w-[1.67vw]"
                    h="primary:h-[0.78125rem] h-[1.67vw]"
                  />
                  <span className="font-normal primary:text-[0.625rem] text-[1.33vw] primary:leading-[0.5rem] leading-[1.07vw]">
                    APP Store
                  </span>
                </div>
              </div>
              <div className="flex flex-col bg-white-default primary:px-[0.96875rem] px-[2.07vw] primary:py-[1rem]  py-[2.13vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <CustomImage
                  src="/images/qr_playstore.png"
                  alt="googleQR"
                  w="primary:w-[5.5625rem] w-[11.87vw]"
                  h="primary:h-[5.5625rem] h-[11.87vw]"
                />
                <div className="flex items-center primary:gap-[0.438rem] gap-[0.93vw]">
                  <CustomImage
                    src={'/icons/gray_google.svg'}
                    alt="applelogo"
                    w="primary:w-[0.8125rem] w-[1.73vw]"
                    h="primary:h-[0.8125rem] w-[1.73vw]"
                  />
                  <span className="font-normal primary:text-[0.625rem] text-[1.33vw] primary:leading-[0.5rem] leading-[1.07vw]">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
            <span className="primary:text-[0.781rem] text-[1.67vw] text-gray-300">
              휴대폰으로 QR 코드를 스캔해서 설치해보세요
            </span>
          </div>
          <CustomImage
            src={'/assets/images/modal_phone.png'}
            alt="phone"
            w="primary:w-[14.6875rem] w-[31.33vw]"
            h="primary:h-[18rem] h-[38.4vw]"
          />
        </div>
      </div>
    </dialog>
  )
}
export default CampaignModal
