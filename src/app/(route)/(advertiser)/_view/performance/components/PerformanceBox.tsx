interface PerformanceBoxProps {
  title: string
  count: string
  unit: string
  className?: string
}

function PerformanceBox({ title, count, unit, className }: PerformanceBoxProps) {
  return (
    <div
      className={`${className} border-t-[1.5px] border-t-gray-200 mobile:pt-[0.52rem] pt-[3.33vw] flex-col primary:gap-[0.26rem] mobile:gap-[0.56vw] gap-[1.11vw] mobile:w-auto w-[35.56vw] inline-block text-left`}>
      <h4 className="font-pretendard font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[4.44vw] primary:leading-[1.365rem] mobile:leading-[2.92vw] leading-[6.67vw] tracking-[-0.005rem] text-gray-300">
        {title}
      </h4>
      <h4 className="font-montserrat font-medium primary:text-[1.56rem] mobile:text-[3.33vw] text-[6.67vw] primary:leading-[2.34rem] mobile:leading-[5vw] leading-[9.17vw] tracking-[-0.005rem] text-gray-300">
        {count}
        <span className="font-pretendard font-normal primary:text-[1.3rem] mobile:text-[2.78vw] text-[5.56vw] primary:leading-[1.95rem] mobile:leading-[4.17vw] leading-[6.67vw]">
          {unit}
        </span>
      </h4>
    </div>
  )
}

export default PerformanceBox
