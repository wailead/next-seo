interface PerformanceBoxProps {
  title: string
  count: string
  unit: string
  className?: string
}

function PerformanceBox({ title, count, unit, className }: PerformanceBoxProps) {
  return (
    <div className={`${className} border-t-[1px] border-t-gray-200 pt-[0.52rem] flex-col gap-[0.26rem] inline-block`}>
      <h4 className="font-pretendard font-medium text-[0.91rem] leading-[1.365rem] tracking-[-0.005rem] text-gray-300">
        {title}
      </h4>
      <h4 className="font-montserrat font-normal text-[1.56rem] leading-[2.34rem] tracking-[-0.005rem] text-gray-300">
        {count}
        <span className="font-pretendard text-[1.3rem] leading-[1.95]">{unit}</span>
      </h4>
    </div>
  )
}

export default PerformanceBox
