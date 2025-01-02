import CustomImage from '../custom-image/CustomImage'

function Footer() {
  return (
    <>
      <div className="flex w-full h-[8.375rem]  bg-gray-600 items-end justify-center border-t-2 border-gray-300 ">
        <div
          className={`flex w-primary items-end justify-center primary:pt-[1.688rem] pt-[3.6vw] primary:pb-[1.5rem] pb-[3.2vw] primary:px-[7.5rem] px-[16vw] primary:gap-[3rem] gap-[6.4vw]`}>
          <div className={`flex flex-col primary:gap-[0.188rem] gap-[0.4vw]`}>
            <div className={`flex items-center justify-start primary:gap-3 gap-[1.6vw]`}>
              <CustomImage
                src="/images/footerlogo.png"
                alt="Logo"
                w="primary:w-[3.75rem] w-[8vw]"
                h="primary:h-[1.625rem] h-[3.47vw]"
              />
              <span className={`font-medium primary:text-[0.719rem] text-[1.53vw] text-white-default `}>
                (주) 와이리
              </span>
            </div>
            <div
              className={`flex text-gray-200 font-normal primary:text-[0.6rem] text-[1.28vw] primary:leading-[0.538rem] leading-[1.15vw]`}>
              <p className="flex flex-col primary:gap-[0.406rem] gap-[0.87vw] font-pretendard ">
                <span className="block">대표자 : 김범석</span>
                <span className="block">
                  사업자등록번호 : 441-86-02504&nbsp;&nbsp;|&nbsp;&nbsp;통신판매업신고 : 2021-서울영등포-2197
                </span>
                <span className="block">주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</span>
                <span className="block">
                  이메일 : wairi_sales@naver.com&nbsp;&nbsp;|&nbsp;&nbsp;대표전화 : 070-8098-7127
                </span>
              </p>
            </div>
          </div>
          <div className={`flex flex-col primary:w-[8.563rem] w-[18.27vw] primary:gap-2 gap-[1.07vw] `}>
            <div className="flex flex-col primary:gap-[0.813rem] gap-[1.73vw] ">
              <span
                className={`font-medium text-white-default primary:text-[0.719rem] text-[1.53vw] primary:leading-[0.5rem] leading-[1.07vw]`}>
                와이리 고객센터
              </span>
              <span
                className={`font-bold text-white-default primary:text-[1rem] text-[2.13vw] primary:leading-[0.563rem] leading-[1.2vw]`}>
                070-8098-7127
              </span>
            </div>
            <div className={`flex primary:leading-[0.875rem] leading-[1.87vw] primary:gap-1 gap-[1.07vw]`}>
              <span className={`font-normal  text-white-default primary:text-[0.75rem] text-[1.6vw]`}>운영시간</span>
              <span className={`font-normal text-white-default primary:text-[0.75rem] text-[1.6vw]`}>
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
