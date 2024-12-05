import CustomImage from '@/components/custom-image/CustomImage'

function Mainheader() {
  return (
    <div className="flex w-full  justify-center items-center bg-[url('/images/web/influencer/background.png')]  bg-contain bg-center ">
      <div className="flex w-primary h-full justify-between ">
        <div className="flex flex-col pt-[3.125rem] pl-[3.219rem] pb-[3.438rem] gap-[3.938rem] ">
          <div className={`flex flex-col w-[19.656rem] gap-[1.063rem]`}>
            <span className={`font-normal text-[0.975rem] leading-[1.188rem]  text-gray-600`}>
              인플루언서 마케팅 NO.1
            </span>
            <div className="flex flex-col gap-[0.531rem]">
              <span className="font-bold text-[2.088rem] leading-[2.375rem]  text-gray-600">여행 인플루언서 </span>
              <span className="font-bold text-[2.088rem] leading-[2.375rem]  text-gray-600">
                마케팅의 시작, 와이리{' '}
              </span>
            </div>
          </div>
          <div className="flex gap-[0.875rem] pl-3">
            <div className="flex flex-col bg-white-default p-[0.869rem] justify-center items-center gap-[0.625rem] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <CustomImage src="/images/qr_appstore.png" alt="appleQR" w={9.6875} h={9.6875} />
              <div className="flex items-center gap-[0.313rem] ">
                <CustomImage src={'/icons/gray_apple.svg'} alt="applelogo" w={1.34375} h={1.34375} />
                <span className="font-normal text-[0.588rem] leading-[0.688rem]">APP Store</span>
              </div>
            </div>
            <div className="flex flex-col bg-white-default p-[0.881rem] justify-center items-center gap-[0.625rem] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <CustomImage src="/images/qr_playstore.png" alt="googleQR" w={9.6875} h={9.6875} />
              <div className="flex items-center gap-[0.313rem] ">
                <CustomImage src={'/icons/gray_google.svg'} alt="applelogo" w={1.40625} h={1.40625} />
                <span className="font-normal text-[0.588rem] leading-[0.688rem]">Google Play</span>
              </div>
            </div>
          </div>
        </div>
        {/** 유튜브 자리 확인을 하기 위해 색상을 넣었습니다. */}
        <div className={`w-[14.625rem] bg-red-400`}>
          <object
            type="text/html"
            data="https://youtube.com/embed/8bBoGxyY48E?si=ZqrJPQPwo4lYDYVc?autoplay=1&mute=1&loop=1"
            className="relative w-full h-full"></object>
        </div>
      </div>
    </div>
  )
}
export default Mainheader
