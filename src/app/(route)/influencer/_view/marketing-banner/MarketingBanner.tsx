import BannerLayout from '@/components/banner/BannerLayout'
import CustomImage from '@/components/custom-image/CustomImage'
import Link from 'next/link'

function MarketingBanner() {
  return (
    <BannerLayout>
      <div className="py-[4vw] mobile:py-none">
        <p className="mobile:text-[2.65vw] text-[5vw] primary:text-[20px]">인플루언서 광고가 필요하신가요?</p>
        <Link href="/influencer/marketing">
          <h1 className="text-primary-default mobile:text-[2.65vw] text-[4.8vw] primary:text-[20px] font-semibold flex items-center">
            무료로 하는 와이리 마케팅 알아보기
            <CustomImage
              src="/icons/icon_arrow_back.svg"
              alt="marketing 화살표 아이콘"
              w="w-[1.3rem] primary:w-[1.65rem] mobile:w-[3vw]"
              h="h-[1.3rem] primary:h-[2rem] mobile:h-[4vw]"
            />
          </h1>
        </Link>
      </div>
      <CustomImage
        src={'/assets/images/banner_influencer.png'}
        alt="배너 인플루언서 이미지"
        w="w-[40vw] primary:w-[18rem] hidden mobile:block"
        h="h-[18vw] primary:h-[9rem]"
      />
    </BannerLayout>
  )
}
export default MarketingBanner
