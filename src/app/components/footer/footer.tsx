import CustomImage from '../custom-image/CustomImage'

function Footer() {
  return (
    <>
      <div className="flex w-full primary:h-[8.375rem] mobile:h-[17.87vw] bg-gray-600 items-end justify-center border-t-2 border-gray-300 ">
        <div
          className={`flex mobile:flex-row flex-col w-primary mobile:items-end justify-center primary:pt-[1.688rem] mobile:pt-[3.6vw] pt-[5.56vw] primary:pb-[1.5rem] mobile:pb-[3.2vw] pb-[5.56vw] primary:px-[7.5rem] mobile:px-[16vw] px-[13.89vw] primary:gap-[3rem] mobile:gap-[6.4vw] gap-[2.78vw]`}>
          <div className={`flex flex-col primary:gap-[0.188rem] gap-[0.4vw]`}>
            <div className={`flex items-center justify-start primary:gap-3 mobile:gap-[1.6vw] gap-[2.78vw]`}>
              <CustomImage
                src="/images/footerlogo.png"
                alt="Logo"
                w="primary:w-[3.75rem] mobile:w-[8vw] w-[15.56vw]"
                h="primary:h-[1.625rem] mobile:h-[3.47vw] h-[8.33vw]"
              />
              <span
                className={`font-medium primary:text-[0.719rem] mobile:text-[1.53vw] text-[3.89vw] text-white-default `}>
                (주) 와이리
              </span>
            </div>
            <div
              className={` text-gray-200 font-normal primary:text-[0.6rem] text-[1.28vw] primary:leading-[0.538rem] leading-[1.15vw] mobile:flex hidden`}>
              <p className="flex flex-col primary:gap-[0.406rem] gap-[0.87vw] font-pretendard ">
                <span className="block">대표자 : 김범석</span>
                <span className="block">
                  사업자등록번호 : 441-86-02504 &nbsp;&nbsp;|&nbsp;&nbsp;통신판매업신고 : 2021-서울영등포-2197
                </span>
                <span className="block">주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</span>
                <span className="block">
                  이메일 : wairi_sales@naver.com&nbsp;&nbsp;|&nbsp;&nbsp;대표전화 : 070-8098-7127
                </span>
              </p>
            </div>
            <div className="mobile:hidden flex">
              <p className="text-gray-200 font-normal whitespace-pre-line text-[3.33vw]">
                {`대표자: 김범석
                사업자 등록번호 : 441-86-02504
                통신판매업신고 : 2021-서울영등포-2197
                주소 : 서울시 동작구 상도로 55길 6, 
                테크스테이션 408호
                이메일 : wairi_sales@naver.com
                대표전화 : 070-8098-7127`}
              </p>
            </div>
          </div>
          <div
            className={`flex mobile:flex-col primary:w-[8.938rem] mobile:w-[19vw] primary:gap-2 mobile:gap-[1.07vw] gap-[11.11vw]`}>
            <div className="flex flex-col primary:gap-[0.813rem] mobile:gap-[1.73vw] ">
              <span
                className={`mobile:font-medium text-white-default primary:text-[0.719rem] mobile:text-[1.53vw] text-[3.89vw] primary:leading-[0.5rem] mobile:leading-[1.07vw]`}>
                와이리 고객센터
              </span>
              <span
                className={`mobile:font-bold text-white-default primary:text-[1rem] mobile:text-[2.13vw] text-[3.89vw] primary:leading-[0.563rem] mobile:leading-[1.2vw] `}>
                070-8098-7127
              </span>
            </div>
            <div
              className={`flex mobile:flex-row flex-col primary:leading-[0.875rem] mobile:leading-[1.87vw] primary:gap-1 mobile:gap-[1.07vw]`}>
              <span
                className={`font-normal text-white-default primary:text-[0.75rem] mobile:text-[1.6vw] text-[3.89vw]`}>
                운영시간
              </span>
              <span
                className={`font-normal text-white-default primary:text-[0.75rem] mobile:text-[1.6vw] text-[3.89vw]`}>
                평일 10:00~18:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
