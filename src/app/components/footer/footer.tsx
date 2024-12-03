import { styleRatio } from '@/utils/styleRatio'
import Image from 'next/image'

function Footer() {
  return (
    <>
      <div className="flex w-full  bg-gray-600 items-center justify-center border-2 border-gray-300 ">
        <div className={`flex items-end justify-between pt-[21px] pb-[28px] px-[52px] gap-[116px]`}>
          <div className={`flex flex-col gap-1`}>
            <div className={`flex items-center justify-start gap-3`}>
              <Image src="/images/footerlogo.png" alt="Logo" width={styleRatio(135)} height={styleRatio(62)} />
              <span className={`font-semibold text-[${styleRatio(28)}px] text-white-default `}>(주)와이리</span>
            </div>
            <div className={`flex text-gray-200 font-normal text-[${styleRatio(25)}px] leading-[${styleRatio(40)}px]`}>
              <p>
                <span className="block">대표자 : 김범석</span>
                <span className="block">사업자등록번호 : 441-86-02504 | 통신판매업신고 : 2021-서울영등포-2197</span>
                <span className="block">주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</span>
                <span className="block">이메일 : wairi_sales@naver.com | 대표전화 : 070-8098-7127</span>
              </p>
            </div>
          </div>
          <div className={`flex flex-col w-[${styleRatio(326)}px] gap-1.5`}>
            <div className="flex flex-col gap-[2.5px] ">
              <span className={`font-medium text-white-default text-[${styleRatio(28)}px] leading-[${styleRatio(32)}px]`}>와이리 고객센터</span>
              <span className={`font-bold text-white-default text-[${styleRatio(35)}px] leading-[${styleRatio(40)}px]`}>070-8098-7127</span>
            </div>
            <div className={`flex justify-between leading-[${styleRatio(24)}px]`}>
              <span className={`font-medium  text-white-default text-[${styleRatio(26)}px]`}>운영시간</span>
              <span className={`font-medium text-white-default text-[${styleRatio(26)}px]`}>평일 10:00~18:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
