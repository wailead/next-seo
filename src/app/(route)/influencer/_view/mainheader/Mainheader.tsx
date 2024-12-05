import { styleRatio } from '@/utils/styleRatio'
import Image from 'next/image'

function Mainheader() {
  return (
    <div className="flex w-full  justify-center items-center bg-[url('/images/influencer/background.png')]  bg-contain bg-center ">
      <div className="flex w-primary h-full justify-between ">
        <div className="flex flex-col pt-[50px] pl-[51.5px] pb-[55px] gap-[63px] ">
          <div className={`flex flex-col w-[314.5px] gap-[17px]`}>
            <span className={`font-normal text-[15.6px] leading-[19px]  text-gray-600`}>인플루언서 마케팅 NO.1</span>
            <div className="flex flex-col gap-[8.5px]">
              <span className="font-bold text-[33.4px] leading-[38px]  text-gray-600">여행 인플루언서 </span>
              <span className="font-bold text-[33.4px] leading-[38px]  text-gray-600">마케팅의 시작, 와이리 </span>
            </div>
          </div>
          <div className="flex gap-[14px] pl-3">
            <div className="flex flex-col bg-white-default p-[13.9px] justify-center items-center gap-[10px] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/qr_appstore.png"
                alt="appleQR"
                width={styleRatio(155)}
                height={styleRatio(155)}></Image>
              <div className="flex items-center gap-[5px] ">
                <Image
                  src={'/icons/gray_apple.svg'}
                  alt="applelogo"
                  width={styleRatio(21.5)}
                  height={styleRatio(21.5)}
                />
                <span className="font-normal text-[9.4px] leading-[11px]">APP Store</span>
              </div>
            </div>
            <div className="flex flex-col bg-white-default p-[14.1px] justify-center items-center gap-[10px] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/qr_playstore.png"
                alt="googleQR"
                width={styleRatio(155)}
                height={styleRatio(155)}></Image>
              <div className="flex items-center gap-[5px] ">
                <Image
                  src={'/icons/gray_google.svg'}
                  alt="applelogo"
                  width={styleRatio(22.5)}
                  height={styleRatio(22.5)}
                />
                <span className="font-normal text-[9.4px] leading-[11px]">Google Play</span>
              </div>
            </div>
          </div>
        </div>
        {/** 유튜브 자리 확인을 하기 위해 색상을 넣었습니다. */}
        <div className={`w-[234px] bg-red-400 pointer-events-none`}>
          <object
            type="text/html"
            data="https://youtube.com/embed/8bBoGxyY48E?autoplay=1&mute=1&controls=0&loop=1&playlist=8bBoGxyY48E"
            className="relative w-full h-full"></object>
        </div>
      </div>
    </div>
  )
}
export default Mainheader
