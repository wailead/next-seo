import CustomImage from '@/components/custom-image/CustomImage'

interface Props {
  title: string
  name: string
  radioChecked: boolean
  handleRadioChange: (name: string) => void
}

function InquiryRadio({ title, name, radioChecked, handleRadioChange }: Props) {
  return (
    <div className="flex gap-1.5 cursor-pointer " onClick={() => handleRadioChange(name)}>
      <input
        type="radio"
        id={name}
        name="howfind"
        value={name}
        className=" appearance-none w-[0.875rem] h-[0.875rem] bg-gray-300 rounded-[0.125rem] cursor-pointer   "
      />
      {radioChecked && (
        <div className="absolute ">
          <CustomImage
            src="/icons/plan_true_gray.svg"
            w="w-[0.875rem]"
            h="h-[0.875rem]"
            alt="checked"
            className="bg-white-default rounded-[0.125rem]"
          />
        </div>
      )}

      <label htmlFor={name} className="text-white-default leading-[0.9375rem] cursor-pointer text-[0.875rem] ">
        {title}
      </label>
    </div>
  )
}
export default InquiryRadio
