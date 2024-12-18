import { SectionLayout } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'

function ServiceIntroduction() {
  return (
    <div className="bg-[#FFF9ED]">
      <div className="bg-white-default rounded-bl-[3.9rem]">
        <SectionLayout>
          <div className="flex flex-col items-center gap-[2.6rem] px-x pt-top pb-bottom ">
            <div className="flex flex-col items-center gap-[0.52rem]">
              <h3 className="font-pretendard font-medium text-gray-300 text-[1.17rem] leading-[1.755rem] tracking-tight">
                언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
              </h3>
              <h1 className="font-pretendard font-bold text-[1.56rem] leading-[2.34rem] tracking-tight text-gray-default text-center">
                <span className="text-primary-default">무료로 검증된 인플루언서</span>를 통해
                <br />
                마케팅을 진행해보세요
              </h1>
            </div>
            <div className="flex items-center gap-[1.95rem]">
              <div className="flex flex-col items-center gap-[0.78rem]">
                <CustomImage src="/assets/images/coins.png" alt="코인들 사진" w="w-[5.33rem]" h="h-[6.793rem]" />
                <div className="flex flex-col items-center gap-[0.39rem]">
                  <h3 className="font-montserrat font-semibold text-[1.3rem] leading-[1.95rem] tracking-tight text-gray-300">
                    400,000원 ~ 50,000원
                  </h3>
                  <p className="font-pretendard font-normal text-[0.91rem] leading-[1.365rem] tracking-tight text-gray-300">
                    타사 인플루언서 10명 진행 기준
                  </p>
                </div>
              </div>
              <CustomImage src="/assets/icons/arrow.svg" alt="화살표 사진" w="w-[3.25rem]" h="h-[2.015rem]" />
              <div className="flex flex-col items-center gap-[0.78rem]">
                <CustomImage src="/assets/images/coin.png" alt="코인 사진" w="w-[4.615rem]" h="h-[4.615rem]" />
                <div className="flex flex-col items-center gap-[0.26rem]">
                  <h2 className="font-montserrat font-semibold text-[1.56rem] leading-[2.34rem] tracking-tight text-primary-default">
                    0원
                  </h2>
                  <p className="font-pretendard font-normal text-[0.91rem] leading-[1.365rem] tracking-tight text-gray-300 text-center">
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
