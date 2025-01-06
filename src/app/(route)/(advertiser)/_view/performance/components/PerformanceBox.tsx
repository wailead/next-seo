interface PerformanceBoxProps {
  title: string
  count: string
  unit: string
  className?: string
}

function PerformanceBox({ title, count, unit, className }: PerformanceBoxProps) {
  return (
    <div
      className={`${className} border-t-[1.5px] border-t-gray-200 pt-[0.52rem] flex-col primary:gap-[0.26rem] gap-[0.56vw] inline-block text-left`}>
      <h4 className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw] tracking-[-0.005rem] text-gray-300">
        {title}
      </h4>
      <h4 className="font-montserrat font-medium primary:text-[1.56rem] text-[3.33vw] primary:leading-[2.34rem] leading-[5vw] tracking-[-0.005rem] text-gray-300">
        {count}
        <span className="font-pretendard font-normal primary:text-[1.3rem] text-[2.78vw] primary:leading-[1.95rem] leading-[4.17vw]">
          {unit}
        </span>
      </h4>
    </div>
  )
}

export default PerformanceBox
