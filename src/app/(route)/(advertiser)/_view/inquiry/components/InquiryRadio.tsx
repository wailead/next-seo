import CustomImage from '@/components/custom-image/CustomImage'
interface Props {
  title: string
  name: string
  radioChecked: boolean
  handleRadioChange: (name: string) => void
}

function InquiryRadio({ title, name, radioChecked, handleRadioChange }: Props) {
  return (
    <div
      className="flex primary:gap-1.5 mobile:gap-[0.8vw] gap-[1.11vw] cursor-pointer "
      onClick={() => handleRadioChange(name)}>
      <input
        type="radio"
        id={name}
        name="howfind"
        value={name}
        className=" appearance-none primary:w-[0.875rem] mobile:w-[1.87vw] w-[3.89vw] primary:h-[0.875rem] mobile:h-[1.87vw] h-[3.89vw] bg-gray-300 rounded-[0.125rem] cursor-pointer   "
      />
      {radioChecked && (
        <div className="absolute ">
          <CustomImage
            src="/assets/icons/plan_true_gray.svg"
            w="primary:w-[0.875rem] mobile:w-[1.87vw] w-[3.89vw]"
            h="primary:h-[0.875rem] mobile:h-[1.87vw] h-[3.89vw]"
            alt="checked"
            rounded="rounded-[0.125rem]"
            bgColor="bg-white-default"
          />
        </div>
      )}

      <label
        htmlFor={name}
        className="text-white-default primary:leading-[0.9375rem] mobile:leading-[2vw] leading-[3.89vw] cursor-pointer primary:text-[0.875rem] mobile:text-[1.87vw] text-[3.89vw]">
        {title}
      </label>
    </div>
  )
}
export default InquiryRadio
