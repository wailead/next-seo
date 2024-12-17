interface Props {
  title: string
  name: string
  value: string
  setValue: (value: string) => void
}

function InquiryInput({ title, name, value, setValue }: Props) {
  return (
    <div className="flex flex-col w-[19.375rem]">
      <label htmlFor={name} className="text-white-default text-[0.875rem]">
        {title}
      </label>
      <input
        type="text"
        name={name}
        className="w-full  bg-gray-300 rounded-[0.125rem] text-white-default px-2.5 py-[0.375rem] focus:outline-none text-[0.875rem]"
        id={name}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
export default InquiryInput
