import CustomImage from '@/components/custom-image/CustomImage'
import { useScrollButton } from '@/hooks'

interface Props {
  img: string
  title: string
  desc: string
}

function ServiceCard({ img, title, desc }: Props) {
  return (
    <>
      <div className="flex flex-col primary:w-[19.5rem] w-[41.6vw] primary:h-[20.625rem] h-[44vw] items-center primary:gap-4 gap-[2.13vw]">
        <div className="flex flex-col w-full primary:gap-[0.563rem] gap-[2.13vw] ">
          <div className="flex justify-center">
            <CustomImage
              src={img}
              alt={title}
              w="primary:w-[17.875rem] w-[38.13vw]"
              h="primary:h-[11.938rem] h-[25.47vw]"
              fill
              className="rounded-[0.938rem] "
            />
          </div>
          <div className="flex flex-col justify-start primary:gap-1.5 gap-[0.8vw]">
            <h2 className="font-bold primary:text-[1.3rem] text-[2.67vw] text-gray-600 ">{title}</h2>
            <span className="primary:text-[0.906rem] text-[1.93vw] text-gray-600 whitespace-pre-line primary:leading-[1.25rem] leading-[2.67vw]">
              {desc}
            </span>
          </div>
        </div>
        <button
          className="flex w-full justify-center bg-primary-default primary:py-[0.5rem] py-[1.07vw] rounded-[0.313rem] "
          onClick={useScrollButton}>
          <span className="font-medium primary:text-[0.813rem] text-[1.73vw] text-white-default tracking-tighter">
            이용하기
          </span>
        </button>
      </div>
    </>
  )
}
export default ServiceCard
