import BannerLayout from '@/components/banner/BannerLayout'
import CustomImage from '@/components/custom-image/CustomImage'

function GovermentBanner() {
  return (
    <BannerLayout>
      <div className="flex gap-6 w-full items-center justify-center">
        <div>
          <p className="text-[2.65vw] primary:text-[20px]">문화체육관광부 한국관광공사 주관</p>
          <h1 className="text-[2.65vw] primary:text-[20px]">올해의 관광벤처 우수기업 선정</h1>
        </div>
        <div className="flex items-center gap-[0.5rem]">
          <CustomImage
            src={'/assets/images/goverment_banner_0.png'}
            alt="배너 인플루언서 이미지"
            w="primary:w-[7.8rem] w-[16vw]"
            h="primary:h-[1.5rem] h-[3vh]"
          />
          <CustomImage
            src={'/assets/images/goverment_banner_1.png'}
            alt="배너 인플루언서 이미지"
            w="primary:w-[7rem] w-[15vw]"
            h="primary:h-[4rem] h-[7vh]"
          />
        </div>
      </div>
    </BannerLayout>
  )
}

export default GovermentBanner
