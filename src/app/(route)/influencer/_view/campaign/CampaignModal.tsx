import { styleRatio } from '@/utils/styleRatio'
import Image from 'next/image'

interface Props {
  handleModal: () => void
}

function CampaignModal({ handleModal }: Props) {
  return (
    <div className="flex w-full h-full fixed top-0 left-0 justify-center items-center bg-black/50 z-30" onClick={handleModal}>
      <div
        className="flex flex-col  w-[584px] h-[420px] bg-[url('/images/web/influencer/background.png')] bg-cover rounded-[30px] justify-between items-center pt-[18.5px] px-[19.5px] "
        onClick={e => {
          e.stopPropagation()
        }}>
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-end">
            <button onClick={handleModal}>
              <Image src={'/assets/images/close.svg'} alt="close" width={23.5} height={23.5} />
            </button>
          </div>
          <div className="flex flex-col w-[260px] top-0 items-center gap-2.5">
            <span className="font-bold text-[21px] leading-[30px] text-gray-600">와이리 앱에서 더 많은 캠페인을 확인할 수 있어요!</span>
            <Image src={'/assets/images/polygon.png'} alt="polygon" width={8} height={5} />
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex flex-col w-fit gap-3 pl-6 ">
            <div className="flex gap-[14px] pt-[58px]">
              <div className="flex flex-col bg-white-default p-[13.9px] justify-center items-center gap-[10px] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <Image src="/images/qr_appstore.png" alt="appleQR" width={styleRatio(176)} height={styleRatio(176)}></Image>
                <div className="flex items-center gap-[7px] ">
                  <Image src={'/images/gray_apple.svg'} alt="applelogo" width={styleRatio(24)} height={styleRatio(24)} />
                  <span className="font-normal text-[10px] leading-[8px]">APP Store</span>
                </div>
              </div>
              <div className="flex flex-col bg-white-default p-[14.1px] justify-center items-center gap-[10px] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
                <Image src="/images/qr_playstore.png" alt="googleQR" width={styleRatio(176)} height={styleRatio(176)}></Image>
                <div className="flex items-center gap-[7px] ">
                  <Image src={'/images/gray_google.svg'} alt="applelogo" width={styleRatio(25)} height={styleRatio(25)} />
                  <span className="font-normal text-[10px] leading-[8px]">Google Play</span>
                </div>
              </div>
            </div>
            <span className="text-[12.5px] text-gray-300">휴대폰으로 QR 코드를 스캔해서 설치해보세요</span>
          </div>
          <Image src={'/assets/images/modal_phone.png'} alt="phone" width={235} height={240} />
        </div>
      </div>
    </div>
  )
}
export default CampaignModal
