import CustomImage from '@/components/custom-image/CustomImage'
import { useEffect, useState } from 'react'
import AppStoreButtons from '../join-banner/components/app-store-buttons'
import CampaignQrCode from './components/campaign-qr-code'

interface Props {
  showModal: boolean
  handleModalOpen: () => void
}

function CampaignModal({ handleModalOpen, showModal }: Props) {
  const [animation, setAnimation] = useState(false)
  const [screenWidth, setScreenWidth] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth)
        setIsLoaded(true)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

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
        className="flex flex-col primary:w-[36.5rem] w-[77.87vw] primary:h-[26.25rem] mobile:h-[56vw] bg-[url('/assets/images/background.png')] bg-cover rounded-[1.875rem] justify-between items-center primary:pt-[1.15rem] mobile:pt-[2.45vw] pt-[5.56vw] mobile:pb-0 pb-[6.67vw] primary:px-[1.22rem] mobile:px-[2.6vw] px-[5.56vw] mobile:gap-0 gap-[6.67vw]"
        onClick={e => {
          e.stopPropagation()
        }}>
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-end">
            <button onClick={handleModalClose}>
              {/* svg파일은 반응형 작업 안해도 되는듯 합니다.*/}
              <CustomImage src={'/assets/icons/close.svg'} alt="close" w="w-[1.469rem]" h="h-[1.469rem]" />
            </button>
          </div>
          <header>
            <div className="flex flex-col primary:w-[16.25rem] mobile:w-[34.67vw] top-0 items-center primary:gap-2.5 mobile:gap-[1.33vw] gap-[3.33vw]">
              <span className="font-bold primary:text-[1.313rem] mobile:text-[2.80vw] text-[6.67vw] primary:leading-[1.875rem] mobile:leading-[4vw] leading-[7.78vw] text-gray-600 mobile:whitespace-normal whitespace-pre-line">
                {`와이리 앱에서\n 더 많은 캠페인을 \n확인할 수 있어요!`}
              </span>
              {/* svg파일은 반응형 작업 안해도 되는듯 합니다.*/}
              <CustomImage
                src={'/assets/images/polygon.png'}
                alt="polygon"
                w="mobile:w-[0.6rem] w-[2.78vw]"
                h="mobile:h-[0.35rem] h-[1.67vw]"
              />
            </div>
          </header>
        </div>
        <section>
          <div className="flex primary:gap-[0.625rem] gap-[1.33vw]">
            <div className="flex flex-col w-fit primary:gap-3 mobile:gap-[1.6vw] gap-[2.78vw] primary:pl-[1.4375rem] mobile:pl-[3.07vw] pl-0">
              {isLoaded ? (
                screenWidth! < 500 ? (
                  <AppStoreButtons flexCol="flex-col" py="py-[1.625rem]" width="w-[63.89vw]" iconSize={32} />
                ) : (
                  <CampaignQrCode />
                )
              ) : (
                <div></div>
              )}

              {screenWidth! < 500 ? (
                <span className="primary:text-[0.781rem] mobile:text-[1.67vw] text-[3.33vw] text-[#757575]">
                  지금 바로 다운로드 해보세요
                </span>
              ) : (
                <span className="primary:text-[0.781rem] mobile:text-[1.67vw] text-[2.78vw] text-gray-300">
                  휴대폰으로 QR 코드를 스캔해서 설치해보세요
                </span>
              )}
            </div>
            <div className="mobile:flex hidden">
              <CustomImage
                src={'/assets/images/modal_phone.png'}
                alt="phone"
                w="primary:w-[14.6875rem] w-[31.33vw]"
                h="primary:h-[18rem] h-[38.4vw]"
              />
            </div>
          </div>
        </section>
      </div>
    </dialog>
  )
}
export default CampaignModal
