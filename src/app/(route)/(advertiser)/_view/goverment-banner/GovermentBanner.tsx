import BannerLayout from '@/components/banner/BannerLayout'
import CustomImage from '@/components/custom-image/CustomImage'

function GovermentBanner() {
  return (
    <BannerLayout>
      <div className="flex py-[4vw] primary:py-[2rem] mobile:flex-row flex-col mobile:gap-6 gap-1 w-full items-center justify-center">
        <div>
          <p className="mobile:text-[2.65vw] text-[5.3vw] primary:text-[20px]">문화체육관광부 한국관광공사 주관</p>
          <h1 className="mobile:text-[2.65vw] text-[5.3vw] primary:text-[20px] text-center">
            올해의 관광벤처 우수기업 선정
          </h1>
        </div>
        <div className="flex items-center gap-[0.5rem]">
          <CustomImage
            src={'/assets/images/goverment_banner_0.png'}
            alt="배너 인플루언서 이미지"
            w="primary:w-[7.8rem] mobile:w-[16vw] w-[7.8rem]"
            h="primary:h-[1.5rem] mobile:h-[3vh] h-[1.5rem]"
          />
          <CustomImage
            src={'/assets/images/goverment_banner_1.png'}
            alt="배너 인플루언서 이미지"
            w="primary:w-[7rem] mobile:w-[15vw] w-[7rem]"
            h="primary:h-[4rem] mobile:h-[7vh] h-[4rem]"
          />
        </div>
      </div>
    </BannerLayout>
  )
}

export default GovermentBanner
