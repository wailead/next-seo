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
        <div className="absolute flex left-[-3.25rem] bottom-[1.375rem] items-center justify-center">
          <div className="w-[2.188rem] h-[0.063rem] bg-white-default "></div>
          <div className="w-[0.438rem] h-[0.438rem] bg-white-default rounded-[50%] "></div>
        </div>
      )}
      <span
        onClick={() => handleSelect(id)}
        className={`w-fit duration-300  text-primary-100 leading-[1.25rem] ${selectTitle === id ? '  font-bold  text-[1.375rem] text-white-default' : ''}`}>
        {title}
      </span>
      {selectTitle === id && (
        <div className="h-[0.875rem] ">
          {selectTitle === id && selectTitle !== 'more' && (
            <span className={`text-white-default text-[0.875rem] `}>총 {descNum}건의 콘텐츠 제작</span>
          )}
        </div>
      )}
    </div>
  )
}
export default ReferenceCard
