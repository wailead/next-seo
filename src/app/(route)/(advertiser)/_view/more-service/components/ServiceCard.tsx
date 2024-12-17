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
      <div className="flex flex-col w-[19.5rem] h-[20.625rem] items-center gap-4">
        <div className="flex flex-col w-full gap-[0.563rem] ">
          <div className="flex justify-center">
            <CustomImage
              src={img}
              alt={title}
              w="w-[17.875rem]"
              h="h-[11.938rem]"
              fill
              className="rounded-[0.938rem] "
            />
          </div>
          <div className="flex flex-col justify-start gap-1.5">
            <h2 className="font-bold text-[1.3rem] text-gray-600 ">{title}</h2>
            <span className=" text-[0.906rem] text-gray-600 whitespace-pre-line leading-[1.25rem]">{desc}</span>
          </div>
        </div>
        <button
          className="flex w-full justify-center bg-primary-default py-[0.5rem] rounded-[0.313rem] "
          onClick={useScrollButton}>
          <span className="font-medium text-[0.813rem] text-white-default tracking-tighter">이용하기</span>
        </button>
      </div>
    </>
  )
}
export default ServiceCard
