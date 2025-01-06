interface Props {
  title: string
  name: string
  value: string
  setValue: (value: string) => void
}

function InquiryInput({ title, name, value, setValue }: Props) {
  return (
    <div className="flex flex-col primary:w-[19.375rem] mobile:w-[41.33vw] w-full primary:gap-[0.188rem] mobile:gap-[0.4vw] gap-[0.56vw]">
      <label htmlFor={name} className="text-white-default primary:text-[0.875rem] mobile:text-[1.87vw] text-[3.89vw]">
        {title}
      </label>
      <input
        type="text"
        name={name}
        className="w-full  bg-gray-300 rounded-[0.125rem] text-white-default primary:px-2.5 mobile:px-[1.33vw] px-[2.78vw] primary:py-[0.375rem] mobile:py-[0.8vw] py-[1.67vw] focus:outline-none primary:text-[0.875rem] mobile:text-[1.87vw] text-[3.89vw]"
        id={name}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
export default InquiryInput
