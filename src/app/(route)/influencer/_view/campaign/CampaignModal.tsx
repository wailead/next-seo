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
        className="flex flex-col w-[36.5rem] h-[26.25rem] bg-[url('/images/influencer/background.png')] bg-cover rounded-[1.875rem] justify-between items-center pt-[1.156rem] px-[1.219rem] "
        onClick={e => {
          e.stopPropagation()
        }}>
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-end">
            <button onClick={handleModalClose}>
              <CustomImage src={'/icons/influencer/close.svg'} alt="close" w="w-[1.469rem]" h="h-[1.469rem]" />
            </button>
          </div>
          <div className="flex flex-col w-[16.25rem] top-0 items-center gap-2.5">
            <span className="font-bold text-[1.313rem] leading-[1.875rem] text-gray-600">
              와이리 앱에서 더 많은 캠페인을 확인할 수 있어요!
            </span>
            <CustomImage src={'/assets/images/polygon.png'} alt="polygon" w="w-[0.6rem]" h="h-[0.35rem]" />
          </div>
        </div>
        <div className="flex gap-[0.625rem]">
          <div className="flex flex-col w-fit gap-3 pl-[1.4375rem]">
            <div className="flex gap-[0.9rem] pt-[3.625rem]">
              <div className="flex flex-col bg-white-default px-[0.96875rem] py-[1rem] justify-center items-center gap-[0.625rem] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <CustomImage src="/images/qr_appstore.png" alt="appleQR" w="w-[5.5625rem]" h="h-[5.5625rem]" />
                <div className="flex items-center gap-[0.438rem]">
                  <CustomImage src={'/icons/gray_apple.svg'} alt="applelogo" w="w-[0.78125rem]" h="h-[0.78125rem]" />
                  <span className="font-normal text-[0.625rem] leading-[0.5rem]">APP Store</span>
                </div>
              </div>
              <div className="flex flex-col bg-white-default px-[0.96875rem] py-[1rem] justify-center items-center gap-[0.625rem] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <CustomImage src="/images/qr_playstore.png" alt="googleQR" w="w-[5.5625rem]" h="h-[5.5625rem]" />
                <div className="flex items-center gap-[0.438rem]">
                  <CustomImage src={'/icons/gray_google.svg'} alt="applelogo" w="w-[0.8125rem]" h="h-[0.8125rem]" />
                  <span className="font-normal text-[0.625rem] leading-[0.5rem]">Google Play</span>
                </div>
              </div>
            </div>
            <span className="text-[0.781rem] text-gray-300">휴대폰으로 QR 코드를 스캔해서 설치해보세요</span>
          </div>
          <CustomImage src={'/assets/images/modal_phone.png'} alt="phone" w="w-[14.6875rem]" h="h-[18rem]" />
        </div>
      </div>
    </dialog>
  )
}
export default CampaignModal
