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
      <div className="flex flex-col primary:w-[19.5rem] mobile:w-[41.6vw] w-[83.33vw] primary:h-[20.625rem] mobile:h-[44vw] h-[91.39vw] items-center primary:gap-4 mobile:gap-[2.13vw] gap-[3.89vw]">
        <div className="flex flex-col w-full primary:gap-[0.563rem] mobile:gap-[2.13vw] gap-0 ">
          <div className="flex justify-center">
            <CustomImage
              src={img}
              alt={title}
              w="primary:w-[17.875rem] mobile:w-[38.13vw] w-[76.39vw]"
              h="primary:h-[11.938rem] mobile:h-[25.47vw] h-[55.56vw]"
              fill
              className="rounded-[0.938rem] "
            />
          </div>
          <div className="flex flex-col justify-start primary:gap-1.5 mobile:gap-[0.8vw] gap-[2.22vw]">
            <h2 className="font-bold primary:text-[1.3rem] mobile:text-[2.67vw] text-[5.56vw] text-gray-600 ">
              {title}
            </h2>
            <span className="primary:text-[0.906rem] mobile:text-[1.93vw] text-[3.89vw] text-gray-600 whitespace-pre-line primary:leading-[1.25rem] mobile:leading-[2.67vw] leading-[5.56vw]">
              {desc}
            </span>
          </div>
        </div>
        <button
          className="flex w-full justify-center bg-primary-default primary:py-[0.5rem] mobile:py-[1.07vw] py-[2.22vw] rounded-[0.313rem] "
          onClick={useScrollButton}>
          <span className="mobile:font-medium primary:text-[0.813rem] mobile:text-[1.73vw] text-[3.89vw] text-white-default mobile:tracking-tighter">
            이용하기
          </span>
        </button>
      </div>
    </>
  )
}
export default ServiceCard
