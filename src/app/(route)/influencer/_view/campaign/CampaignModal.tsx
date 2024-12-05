import Image from 'next/image'

interface Props {
  handleModal: () => void
}

function CampaignModal({ handleModal }: Props) {
  return (
    <div
      className="flex w-full h-full fixed top-0 left-0 justify-center items-center bg-black/50 z-30"
      onClick={handleModal}>
      <div
        className="flex flex-col w-[36.5rem] h-[26.25rem] bg-[url('/images/web/influencer/background.png')] bg-cover rounded-[1.875rem] justify-between items-center pt-[1.156rem] px-[1.219rem]"
        onClick={e => {
          e.stopPropagation()
        }}>
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-end">
            <button onClick={handleModal}>
              <div className="relative w-[1.469rem] h-[1.469rem]">
                <Image src={'/assets/images/close.svg'} alt="close" fill />
              </div>
            </button>
          </div>
          <div className="flex flex-col w-[16.25rem] top-0 items-center gap-2.5">
            <span className="font-bold text-[1.313rem] leading-[1.875rem] text-gray-600">
              와이리 앱에서 더 많은 캠페인을 확인할 수 있어요!
            </span>
            <div className="relative w-[0.5rem] h-[0.313rem]">
              <Image src={'/assets/images/polygon.png'} alt="polygon" fill />
            </div>
          </div>
        </div>
        <div className="flex gap-[0.625rem]">
          <div className="flex flex-col w-fit gap-3 pl-6">
            <div className="flex gap-[0.875rem] pt-[3.625rem]">
              <div className="flex flex-col bg-white-default p-[0.869rem] justify-center items-center gap-[0.625rem] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <div className="relative w-[11rem] h-[11rem]">
                  <Image src="/images/qr_appstore.png" alt="appleQR" fill />
                </div>
                <div className="flex items-center gap-[0.438rem]">
                  <div className="relative w-[1.5rem] h-[1.5rem]">
                    <Image src={'/images/gray_apple.svg'} alt="applelogo" fill />
                  </div>
                  <span className="font-normal text-[0.625rem] leading-[0.5rem]">APP Store</span>
                </div>
              </div>
              <div className="flex flex-col bg-white-default p-[0.881rem] justify-center items-center gap-[0.625rem] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <div className="relative w-[11rem] h-[11rem]">
                  <Image src="/images/qr_playstore.png" alt="googleQR" fill />
                </div>
                <div className="flex items-center gap-[0.438rem]">
                  <div className="relative w-[1.563rem] h-[1.563rem]">
                    <Image src={'/images/gray_google.svg'} alt="applelogo" fill />
                  </div>
                  <span className="font-normal text-[0.625rem] leading-[0.5rem]">Google Play</span>
                </div>
              </div>
            </div>
            <span className="text-[0.781rem] text-gray-300">휴대폰으로 QR 코드를 스캔해서 설치해보세요</span>
          </div>
          <div className="relative w-[14.688rem] h-[15rem]">
            <Image src={'/assets/images/modal_phone.png'} alt="phone" fill />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CampaignModal
