import CustomImage from '@/components/custom-image/CustomImage'

interface Props {
  img: string
  title: string
  price: string
  sale: string
}

function CampaignCard({ img, title, price, sale }: Props) {
  return (
    <div className="flex flex-col primary:w-[12.34rem] w-[26.33vw] primary:h-[16.625rem] h-[35.47vw] primary:gap-[0.9rem] gap-[1.92vw]">
      <div className="relative primary:w-[12.5rem] w-[26.67vw] primary:h-[9.56rem] h-[20.39vw]">
        <CustomImage
          src={img}
          alt={img}
          w="primary:w-[12.33rem] w-[26.3vw]"
          h="primary:h-[9.68rem] h-[20.65vw]"
          rounded="rounded-[1.125rem]"
        />
      </div>
      <div className="flex flex-col text-start primary:gap-[0.29rem] gap-[0.62vw]">
        <span className="font-bold primary:text-[0.89rem] text-[1.9vw] tracking-tighter primary:leading-[1.35rem] leading-[2.88vw] text-gray-300">
          {title}
        </span>
        <div className="flex primary:text-[1.02rem] text-[2.18vw] primary:leading-[1.5rem] leading-[3.2vw] primary:gap-2 gap-[1.07vw]">
          <span className="line-through text-gray-100 tracking-tighter">{price}</span>
          <span className="text-[#FF5454] tracking-tighter">90%</span>
        </div>
        <div className="flex primary:gap-[0.31rem] gap-[0.66vw]">
          <span className="font-bold primary:text-[1.14rem] text-[2.43vw] primary:leading-[1.72rem] leading-[3.67vw] text-gray-300 tracking-tighter">
            {sale}원
          </span>
          <span className="primary:text-[1.02rem] text-[2.18vw] primary:leading-[1.625rem] leading-[3.47vw] text-gray-300 tracking-tighter">
            1박
          </span>
        </div>
      </div>
    </div>
  )
}
export default CampaignCard
