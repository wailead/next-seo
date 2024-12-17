import { SectionLayout } from '@/components'
import PerformanceBox from './components/PerformanceBox'

function Performance() {
  return (
    <SectionLayout>
      <div className="px-x pt-top pb-bottom flex flex-col gap-[0.39rem] bg-[#FFF9ED]">
        <p className="font-montserrat font-normal text-[0.91rem] text-primary-default">PERFORMANCE</p>
        <div className="flex justify-between">
          <p className="font-pretendard font-bold text-[1.56rem] text-gray-600">
            와이리를 통해 캠페인을
            <br />
            진행 해보세요
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-y-[2.34rem] gap-x-[3.413rem] text-center">
              <PerformanceBox title="보유 인플루언서 수" count="25,000+" unit="명" />
              <div></div>
              <PerformanceBox title="캠페인 신청수" count="16,024+" unit="건" />
              <PerformanceBox title="캠페인 선정수" count="2,281+" unit="건" />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Performance
