import { twMerge } from 'tailwind-merge'

interface Props {
  title: string
  descNum?: string
  selectTitle: string
  id: string
  handleSelect: (text: string) => void
}

function ReferenceCard({ title, descNum, selectTitle, id, handleSelect }: Props) {
  return (
    <div className=" relative flex flex-col cursor-default">
      {selectTitle === id && (
        <div className="absolute flex primary:left-[-3.25rem] left-[-6.93vw] primary:bottom-[1.625rem] bottom-[3.47vw] items-center justify-center">
          <div className="primary:w-[2.188rem] w-[4.67vw] primary:h-[0.063rem] h-[0.13vw] bg-white-default "></div>
          <div className="primary:w-[0.438rem] w-[0.93vw] primary:h-[0.438rem] h-[0.93vw] bg-white-default rounded-[50%] "></div>
        </div>
      )}
      <span
        onClick={() => handleSelect(id)}
        className={twMerge(
          `w-fit duration-300 primary:text-[1rem] text-[2.13vw] text-primary-100 primary:leading-[1.25rem] leading-[2.67vw]`,
          selectTitle === id ? '  font-bold  primary:text-[1.375rem] text-[2.93vw] text-white-default' : ''
        )}>
        {title}
      </span>
      {selectTitle === id && (
        <div className="flex primary:h-[0.875rem] h-[1.87vw] ">
          {selectTitle === id && selectTitle !== 'more' && (
            <span className={`text-white-default primary:text-[0.875rem] text-[1.87vw] `}>
              총 {descNum}건의 콘텐츠 제작
            </span>
          )}
        </div>
      )}
    </div>
  )
}
export default ReferenceCard
