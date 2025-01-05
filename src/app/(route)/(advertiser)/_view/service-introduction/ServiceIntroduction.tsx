import { SectionLayout } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'

function ServiceIntroduction() {
  return (
    <div className="bg-[#FFF9ED]">
      <div className="bg-white-default primary:rounded-bl-[3.9rem] rounded-bl-[8.33vw]">
        <SectionLayout>
          <div className="flex flex-col items-center gap-[2.6rem] px-x pt-top pb-bottom">
            <div className="flex flex-col items-center">
              <h3 className="font-pretendard font-medium text-gray-300 primary:text-[1.56rem] text-[3.33vw] leading-[1.755rem] tracking-[-0.005rem]">
                언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
              </h3>
              <h1 className="font-pretendard font-bold primary:text-[1.56rem] text-[3.33vw] primary:leading-[2.34rem] leading:[5vw] tracking-[-0.005rem] text-gray-default text-center">
                <span className="text-primary-default">무료로 검증된 인플루언서</span>를 통해
                <br />
                마케팅을 진행해보세요
              </h1>
            </div>
            <div className="flex items-center gap-[1.95rem]">
              <div className="flex flex-col items-center gap-[0.78rem]">
                <CustomImage
                  src="/assets/images/coins.png"
                  alt="코인들 사진"
                  w="primary:w-[5.33rem] w-[11.39vw]"
                  h="primaey:h-[6.793rem] h-[14.51vw]"
                />
                <div className="flex flex-col items-center primary:gap-[0.39rem] gap-[0.83vw]">
                  <h3 className="font-montserrat font-semibold primary:text-[1.3rem] text-[2.78vw] leading-[1.95rem] tracking-[-0.005rem] text-gray-300">
                    400,000원 ~ 50,000원
                  </h3>
                  <p className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] leading-[1.365rem] tracking-[-0.005rem] text-gray-300">
                    타사 인플루언서 10명 진행 기준
                  </p>
                </div>
              </div>
              <CustomImage
                src="/assets/icons/arrow.svg"
                alt="화살표 사진"
                w="primary:w-[3.25rem] w-[6.94vw]"
                h="primary:h-[2.015rem] h-[4.31vw]"
              />
              <div className="flex flex-col items-center gap-[1.3rem]">
                <CustomImage
                  src="/assets/images/coin.png"
                  alt="코인 사진"
                  w="primary:w-[4.615rem] w-[9.86vw]"
                  h="primary:h-[4.615rem] h-[9.86vw]"
                />
                <div className="flex flex-col items-center">
                  <h2 className="font-montserrat font-semibold primary:text-[1.56rem] text-[3.33vw] primary:leading-[2.34rem] leading-[5vw] tracking-[-0.005rem] text-primary-default">
                    0원
                  </h2>
                  <p className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw] tracking-[-0.005rem] text-gray-300 text-center">
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
