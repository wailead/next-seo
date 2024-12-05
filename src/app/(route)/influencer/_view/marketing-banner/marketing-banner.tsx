import Link from 'next/link'
import Image from 'next/image'
import { styleRatio } from '@/utils/styleRatio'

function MarketingBanner() {
  return (
    <section className={'w-full h-[121px] bg-white-500 text-gray-600 text-[22px] font-[500] flex items-center justify-center'}>
      <div className="w-primary flex items-center gap-[50px] justify-center">
        <div>
          <p>인플루언서 광고가 필요하신가요?</p>
          <Link href="/influencer/marketing">
            <h1 className="text-primary-default flex">
              무료로 하는 와이리 마케팅 알아보기
              <Image src="/icons/icon_arrow_back.svg" alt="marketing 화살표 아이콘" width={styleRatio(48)} height={styleRatio(48)} />
            </h1>
          </Link>
        </div>
        <Image src={'/assets/images/banner_influencer.png'} alt="배너 인플루언서 이미지" width={styleRatio(370)} height={styleRatio(232)} />
      </div>
    </section>
  )
}
export default MarketingBanner
