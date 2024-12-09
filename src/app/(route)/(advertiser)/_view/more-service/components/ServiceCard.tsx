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
      <div className="flex flex-col w-[312px] h-[330px] items-center gap-4">
        <div className="flex flex-col w-full gap-[9px] ">
          <div className="flex justify-center">
            <CustomImage src={img} alt={title} w="w-[286px]" h="h-[191px]" fill className="rounded-[15px] " />
          </div>
          <div className="flex flex-col justify-start gap-1.5">
            <h2 className="font-bold text-[20.8px] text-gray-600 ">{title}</h2>
            <span className=" text-[14.5px] text-gray-600 whitespace-pre-line leading-[20px]">{desc}</span>
          </div>
        </div>
        <button
          className="flex w-full justify-center bg-primary-default py-[8px] rounded-[5px] "
          onClick={useScrollButton}>
          <span className="font-medium text-[13px] text-white-default tracking-tighter">이용하기</span>
        </button>
      </div>
    </>
  )
}
export default ServiceCard
