interface Props {
  title: string
  name: string
  value: string
  setValue: (value: string) => void
}

function InquiryInput({ title, name, value, setValue }: Props) {
  return (
    <div className="flex flex-col primary:w-[19.375rem] w-[41.33vw]">
      <label htmlFor={name} className="text-white-default primary:text-[0.875rem] text-[1.87vw]">
        {title}
      </label>
      <input
        type="text"
        name={name}
        className="w-full  bg-gray-300 rounded-[0.125rem] text-white-default primary:px-2.5 px-[1.33vw] primary:py-[0.375rem] py-[0.8vw] focus:outline-none primary:text-[0.875rem] text-[1.87vw]"
        id={name}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
export default InquiryInput
