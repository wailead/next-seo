import CustomImage from '../custom-image/CustomImage'

function Footer() {
  return (
    <>
      <div className="flex w-full  bg-gray-600 items-center justify-center border-t-2 border-gray-300 ">
        <div className={`flex w-primary items-end justify-center pt-[27px] pb-[24px] px-[120px] gap-[42px]`}>
          <div className={`flex flex-col gap-[3px]`}>
            <div className={`flex items-center justify-start gap-3`}>
              <CustomImage src="/images/footerlogo.png" alt="Logo" w="w-[60px]" h="h-[26px]" />
              <span className={`font-medium text-[11.5px] text-white-default `}>(주) 와이리</span>
            </div>
            <div className={`flex text-gray-200 font-normal text-[9.6px] leading-[8.6px]`}>
              <p className="flex flex-col gap-[6.5px] font-pretendard ">
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
          <div className={`flex flex-col w-[137px] gap-2 `}>
            <div className="flex flex-col gap-[13px] ">
              <span className={`font-medium text-white-default text-[11.5px] leading-[8px]`}>와이리 고객센터</span>
              <span className={`font-bold text-white-default text-[16px] leading-[9px]`}>070-8098-7127</span>
            </div>
            <div className={`flex leading-[14px] gap-1`}>
              <span className={`font-normal  text-white-default text-[12px]`}>운영시간</span>
              <span className={`font-normal text-white-default text-[12px]`}>평일 10:00~18:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
