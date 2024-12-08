import BannerLayout from '@/components/banner/BannerLayout'
import CustomImage from '@/components/custom-image/CustomImage'

function GovermentBanner() {
  return (
    <BannerLayout>
      <div>
        <p>문화체육관광부 한국관광공사 주관</p>
        <h1>올해의 관광벤처 우수기업 선정</h1>
      </div>
      <div className="flex items-center gap-[0.5rem]">
        <CustomImage
          src={'/assets/images/goverment_banner_0.png'}
          alt="배너 인플루언서 이미지"
          w="w-[7.8rem]"
          h="h-[1.5rem]"
        />
        <CustomImage
          src={'/assets/images/goverment_banner_1.png'}
          alt="배너 인플루언서 이미지"
          w="w-[6.2rem]"
          h="h-[3.2rem]"
        />
      </div>
    </BannerLayout>
  )
}

export default GovermentBanner
