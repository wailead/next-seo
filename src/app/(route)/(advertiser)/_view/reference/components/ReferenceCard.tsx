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
        <div className="absolute flex left-[-52px] bottom-[22px] items-center justify-center">
          <div className="w-[35px] h-[1px] bg-white-default "></div>
          <div className="w-[7px] h-[7px] bg-white-default rounded-[50%] "></div>
        </div>
      )}
      <span
        onClick={() => handleSelect(id)}
        className={`w-fit duration-300  text-primary-100 leading-[20px] ${selectTitle === id ? '  font-bold  text-[22px] text-white-default' : ''}`}>
        {title}
      </span>
      {selectTitle === id && (
        <div className="h-[14px] ">
          {selectTitle === id && selectTitle !== 'more' && (
            <span className={`text-white-default text-[14px] `}>총 {descNum}건의 콘텐츠 제작</span>
          )}
        </div>
      )}
    </div>
  )
}
export default ReferenceCard
