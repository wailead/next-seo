import Link from 'next/link'
import Image from 'next/image'

function MarketingBanner() {
  return (
    <section
      className={
        'w-full h-[7.5625rem] bg-white-500 text-gray-600 text-[1.375rem] font-[500] flex items-center justify-center'
      }>
      <div className="w-primary flex items-center gap-[3.125rem] justify-center">
        <div>
          <p>인플루언서 광고가 필요하신가요?</p>
          <Link href="/influencer/marketing">
            <h1 className="text-primary-default flex">
              무료로 하는 와이리 마케팅 알아보기
              <div className="w-[3rem] h-[3rem]">
                <Image src="/icons/icon_arrow_back.svg" alt="marketing 화살표 아이콘" fill />
              </div>
            </h1>
          </Link>
        </div>
        <div className="w-[23.125rem] h-[14.5rem]">
          <Image src={'/assets/images/banner_influencer.png'} alt="배너 인플루언서 이미지" fill />
        </div>
      </div>
    </section>
  )
}
export default MarketingBanner
