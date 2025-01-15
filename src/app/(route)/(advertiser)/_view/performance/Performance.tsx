import { SectionLayout } from '@/components'
import PerformanceBox from './components/PerformanceBox'

function Performance() {
  return (
    <div className="bg-[#FFF9ED]">
      <SectionLayout>
        <div className="primary:px-x mobile:px-[6.93vw] px-[6.67vw] primary:pt-top mobile:pt-[6.24vw] pt-[8.89vw] mobile:pb-bottom pb-[16.67vw] flex flex-col gap-[0.39rem]">
          <h2 className="font-montserrat font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[4.17vw] text-primary-default">
            PERFORMANCE
          </h2>
          <div className="flex mobile:flex-row flex-col mobile:justify-between mobile:gap-0 gap-[11.11vw]">
            <h3 className="font-pretendard font-bold primary:text-[1.56rem] mobile:text-[3.33vw] text-[6.67vw] text-gray-600">
              와이리를 통해 캠페인을
              <br />
              진행 해보세요
            </h3>
            <section>
              <div className="flex mobile:justify-center">
                <div className="w-full grid grid-cols-2 grid-rows-2 primary:gap-y-[2.34rem] mobile:gap-y-[5vw] gap-y-[6.67vw] primary:gap-x-[3.413rem] mobile:gap-x-[7.29vw] justify-between text-center">
                  <PerformanceBox title="보유 인플루언서 수" count="25,000+" unit="명" />
                  <div />
                  <PerformanceBox title="캠페인 신청수" count="16,024+" unit="건" />
                  <div className="col-start-2 row-start-2 justify-items-end">
                    <PerformanceBox title="캠페인 선정수" count="2,281+" unit="건" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Performance
