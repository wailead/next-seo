import { SectionLayout } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import Image from 'next/image'

function ServiceIntroduction() {
  return (
    <div className="bg-[#FFF9ED]">
      <div className="bg-white-default primary:rounded-bl-[3.9rem] mobile:rounded-bl-[8.33vw] rounded-bl-[16.67vw]">
        <SectionLayout>
          <div className="flex flex-col items-center gap-[2.6rem] primary:px-x mobile:px-[6.93vw] px-[5.56vw] primary:pt-top mobile:pt-[6.24vw] pt-[8.89vw] mobile:pb-bottom pb-[16.67vw]">
            <div className="flex flex-col items-center">
              <span className="font-pretendard font-medium text-gray-300 primary:text-[1.56rem] mobile:text-[3.33vw] text-[3.89vw] mobile:leading-[1.755rem] leading-[5.83vw] tracking-[-0.005rem]">
                언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
              </span>
              <h1 className="font-pretendard font-bold primary:text-[1.56rem] mobile:text-[3.33vw] text-[6.11vw] primary:leading-[2.34rem] mobile:leading-[5vw] leading-[9.17vw] tracking-[-0.005rem] text-gray-default text-center whitespace-pre-wrap">
                <span className="text-primary-default">무료로 검증된 인플루언서</span>를 통해 마케팅을 진행해보세요
              </h1>
            </div>
            <div className="flex items-center mobile:gap-[1.95rem] gap-[3.33vw]">
              <div className="flex flex-col items-center gap-[0.78rem] mobile:w-auto w-[31.11vw]">
                <div className="relative primary:w-[5.33rem] mobile:w-[11.39vw] w-[22.22vw] primary:h-[5.33rem] mobile:h-[11.39vw] h-[22.22vw]">
                  <Image src={'/assets/images/coins.png'} alt="코인들 사진" fill quality={75} loading="lazy" />
                </div>
                <div className="flex flex-col items-center primary:gap-[0.39rem] mobile:gap-[0.83vw] gap-[3.33vw] text-center">
                  <div className="hidden mobile:block text-center">
                    <h2 className="font-montserrat font-semibold primary:text-[1.3rem] text-[2.78vw] leading-[1.95rem] tracking-[-0.005rem] text-gray-300">
                      400,000원 ~ 50,000원
                    </h2>
                    <p className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] leading-[1.365rem] tracking-[-0.005rem] text-gray-300">
                      타사 인플루언서 10명 진행 기준
                    </p>
                  </div>
                  <div className="mobile:hidden text-center">
                    <h2 className="font-montserrat font-semibold text-[5.56vw] leading-[6.67vw] tracking-[-0.005rem] text-gray-300">
                      400,000원~50,000원
                    </h2>
                    <p className="font-pretendard font-normal text-[3.89vw] leading-[5.83vw] tracking-[-0.005rem] text-gray-300">
                      타사 인플루언서 <br />
                      10명 진행 기준
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative primary:w-[3.25rem] mobile:w-[6.94vw] w-[12.22vw] primary:h-[2.015rem] mobile:h-[4.31vw] h-[7.78vw]">
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="화살표 사진"
                  fill
                  // w="primary:w-[3.25rem] mobile:w-[6.94vw] w-[12.22vw]"
                  // h="primary:h-[2.015rem] mobile:h-[4.31vw] h-[7.78vw]"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-[1.3rem] mobile:w-auto w-[33.33vw]">
                <CustomImage
                  src={'/assets/images/coin.png'}
                  alt="코인 사진"
                  w="primary:w-[4.615rem] mobile:w-[9.86vw] w-[14.72vw]"
                  h="primary:h-[4.615rem] mobile:h-[9.86vw] h-[14.72vw]"
                  quality={75}
                />
                <div className="flex flex-col items-center mobile:gap-0 gap-[3.33vw]">
                  <h3 className="font-montserrat font-semibold primary:text-[1.56rem] mobile:text-[3.33vw] text-[6.67vw] primary:leading-[2.34rem] leading-[5vw] tracking-[-0.005rem] text-primary-default">
                    0원
                  </h3>
                  <p className="font-pretendard font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[3.89vw] primary:leading-[1.365rem] mobile:leading-[2.92vw] leading-[5.83vw] tracking-[-0.005rem] text-gray-300 text-center">
                    와이리에서는
                    <br />
                    인원수 관계없이 무료!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  )
}

export default ServiceIntroduction
