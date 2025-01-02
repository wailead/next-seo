import CustomImage from '@/components/custom-image/CustomImage'

function Mainheader() {
  return (
    <div className="flex w-full  justify-center items-center bg-[url('/images/influencer/background.png')]  bg-contain bg-center ">
      <div className="flex w-primary h-full justify-between ">
        <div className="flex flex-col primary:pt-[3.125rem] pt-[6.66vw] primary:pl-[3.219rem] pl pl-[6.86vw] primary:pb-[3.438rem] pb-[7.33vw]  primary:gap-[3.938rem] gap-[8.4vw] ">
          <div className={`flex flex-col primary:w-[19.656rem] w-[41.9333vw] primary:gap-[1.063rem] gap-[2.26vw]`}>
            <span
              className={`font-normal primary:text-[0.975rem] text-[2.08vw] primary:leading-[1.188rem] leading-[2.53vw]  text-gray-600`}>
              인플루언서 마케팅 NO.1
            </span>
            <div className="flex flex-col primary:gap-[0.531rem] gap-[1.13vw]">
              <span className="font-bold primary:text-[2.088rem] text-[4.45vw] primary:leading-[2.375rem] leading-[5.06vw]  text-gray-600">
                여행 인플루언서{' '}
              </span>
              <span className="font-bold primary:text-[2.088rem] text-[4.45vw] primary:leading-[2.375rem] leading-[5.06vw] text-gray-600">
                마케팅의 시작, 와이리{' '}
              </span>
            </div>
          </div>
          <div className="flex primary:gap-[0.875rem] gap-[1.86vw] primary:pl-3.5 pl-[1.86vw]">
            <div className="flex flex-col bg-white-default primary:p-[0.869rem] p-[1.86vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <CustomImage
                src="/images/qr_appstore.png"
                alt="appleQR"
                w="primary:w-[5rem] w-[10.66vw]"
                h="primary:h-[5rem] h-[10.66vw]"
              />
              <div className="flex items-center primary:gap-[0.313rem] gap-[0.66vw]  ">
                <CustomImage
                  src={'/icons/gray_apple.svg'}
                  alt="applelogo"
                  w="primary:w-[0.75rem] w-[1.6vw]"
                  h="primary:h-[0.75rem] h-[1.6vw]"
                />
                <span className="font-normal primary:text-[0.588rem] text-[1.25vw] primary:leading-[0.688rem] leading-[1.47vw]">
                  APP Store
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-white-default primary:p-[0.869rem] p-[1.86vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
              <CustomImage
                src="/images/qr_playstore.png"
                alt="googleQR"
                w="primary:w-[5rem] w-[10.66vw]"
                h="primary:h-[5rem] h-[10.66vw]"
              />
              <div className="flex items-center  primary:gap-[0.313rem] gap-[0.66vw] ">
                <CustomImage
                  src={'/icons/gray_google.svg'}
                  alt="applelogo"
                  w="primary:w-[0.75rem] w-[1.6vw]"
                  h="primary:h-[0.75rem] h-[1.6vw]"
                />
                <span className="font-normal primary:text-[0.588rem] text-[1.25vw] primary:leading-[0.688rem] leading-[1.47vw]">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>
        {/** 유튜브 자리 확인을 하기 위해 색상을 넣었습니다. */}
        <div className={`primary:w-[14.7rem] w-[31.36vw] bg-black pointer-events-none`}>
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
