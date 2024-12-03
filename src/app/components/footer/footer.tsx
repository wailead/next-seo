function Footer() {
  return (
    <>
      <div className="flex w-full  bg-gray-600 items-center justify-center border-2 border-gray-300 ">
        <div className="flex items-end justify-between pt-[42px] pb-[56px] px-[100px] gap-[133px] ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-6 ">
              <img src="./images/footerlogo.png" alt="Logo" className="w-[135px] h-[62px]" />
              <span className="font-semibold text-[28px] text-white-default  ">(주)와이리</span>
            </div>
            <div className="flex text-gray-200 font-normal text-[25px] leading-10 ">
              <p>
                <span className="block">대표자 : 김범석</span>
                <span className="block">사업자등록번호 : 441-86-02504 | 통신판매업신고 : 2021-서울영등포-2197</span>
                <span className="block">주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</span>
                <span className="block">이메일 : wairi_sales@naver.com | 대표전화 : 070-8098-7127</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[326px] gap-3 ">
            <div className="flex flex-col gap-[5px] ">
              <span className="font-medium text-white-default text-[28px] leading-8 ">와이리 고객센터</span>
              <span className="font-bold text-white-default text-[35px] leading-10 ">070-8098-7127</span>
            </div>
            <div className="flex justify-between leading-6 ">
              <span className="font-medium  text-white-default text-[26px] ">운영시간</span>
              <span className="font-medium text-white-default text-[26px] ">평일 10:00~18:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
