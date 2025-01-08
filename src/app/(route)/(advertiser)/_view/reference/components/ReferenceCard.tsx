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
        <div className="absolute flex primary:left-[-3.25rem] mobile:left-[-6.93vw] left-[-12.22vw] primary:bottom-[1.813rem] mobile:bottom-[3.87vw] bottom-[8.33vw] items-center justify-center">
          <div className="primary:w-[2.188rem] mobile:w-[4.67vw] w-[6.94vw] primary:h-[0.063rem] mobile:h-[0.13vw] h-[0.28vw] bg-white-default "></div>
          <div className="primary:w-[0.438rem] mobile:w-[0.93vw] w-[1.67vw] primary:h-[0.438rem] mobile:h-[0.93vw] h-[1.67vw] bg-white-default rounded-[50%] "></div>
        </div>
      )}
      <span
        onClick={() => handleSelect(id)}
        className={twMerge(
          `w-fit duration-300 primary:text-[1rem] mobile:text-[2.13vw] text-[4.03vw] text-primary-100 primary:leading-[1.25rem] mobile:leading-[2.67vw] leading-[5.56vw]`,
          selectTitle === id
            ? '  font-bold  primary:text-[1.375rem] mobile:text-[2.93vw] text-[5.97vw] text-white-default'
            : ''
        )}>
        {title}
      </span>
      {selectTitle === id && (
        <div className="flex primary:h-[0.875rem] mobile:h-[1.87vw] h-[4.44vw] ">
          {selectTitle === id && selectTitle !== 'more' && (
            <span
              className={`text-white-default primary:text-[0.875rem] mobile:text-[1.87vw] text-[3.89vw] mobile:leading-none leading-[4.44vw]`}>
              총 {descNum}건의 콘텐츠 제작
            </span>
          )}
        </div>
      )}
    </div>
  )
}
export default ReferenceCard
