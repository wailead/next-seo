import BannerLayout from '@/components/banner/BannerLayout'
import CustomImage from '@/components/custom-image/CustomImage'
import Link from 'next/link'

function MarketingBanner() {
  return (
    <BannerLayout>
      <div>
        <p>인플루언서 광고가 필요하신가요?</p>
        <Link href="/influencer/marketing">
          <h1 className="text-primary-default font-semibold flex items-center">
            무료로 하는 와이리 마케팅 알아보기
            <CustomImage src="/icons/icon_arrow_back.svg" alt="marketing 화살표 아이콘" w="w-[1.65rem]" h="h-[2rem]" />
          </h1>
        </Link>
      </div>
      <CustomImage
        src={'/assets/images/banner_influencer.png'}
        alt="배너 인플루언서 이미지"
        w="w-[11.5em]"
        h="h-[7.5625rem]"
      />
    </BannerLayout>
  )
}
export default MarketingBanner
