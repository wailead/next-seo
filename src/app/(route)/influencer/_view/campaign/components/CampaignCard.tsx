'use client'
import CustomImage from '@/components/custom-image/CustomImage'

interface Props {
  img: string
  title: string
  price: string
  sale: string
  mobile?: string
}

function CampaignCard({ img, title, price, sale, mobile }: Props) {
  return (
    <div
      className={`flex flex-col primary:w-[12.34rem] mobile:w-[26.33vw] w-[40vw] primary:h-[16.625rem] mobile:h-[35.47vw] h-[58.33vw] primary:gap-[0.9rem] mobile:gap-[1.92vw] gap-[2.78vw] ${mobile}`}>
      <div className="relative primary:w-[12.5rem] mobile:w-[26.67vw] w-[40vw] primary:h-[9.56rem] mobile:h-[20.39vw] h-[31.11vw]">
        <CustomImage
          src={img}
          alt={img}
          w="primary:w-[12.33rem] mobile:w-[26.3vw] w-[40vw]"
          h="primary:h-[9.68rem] mobile:h-[20.65vw] h-[31.11vw]"
          rounded="mobile:rounded-[1.125rem] rounded-[3.89vw]"
        />
      </div>
      <div className="flex flex-col text-start primary:gap-[0.29rem] mobile:gap-[0.62vw] gap-[2.22vw]">
        <span className="font-bold primary:text-[0.89rem] mobile:text-[1.9vw] text-[2.78vw] tracking-tighter primary:leading-[1.35rem] mobile:leading-[2.88vw] leading-[4.17vw] text-gray-300">
          {title}
        </span>
        <div className="flex primary:text-[1.02rem] mobile:text-[2.18vw] text-[3.33vw] primary:leading-[1.5rem] leading-[3.2vw] primary:gap-2 gap-[1.07vw]">
          <span className="line-through text-gray-100 tracking-tighter">{price}</span>
          <span className="text-[#FF5454] tracking-tighter">90%</span>
        </div>
        <div className="flex primary:gap-[0.31rem] mobile:gap-[0.66vw] gap-[1.11vw]">
          <span className="mobile:font-bold font-semibold primary:text-[1.14rem] mobile:text-[2.43vw] text-[3.61vw] primary:leading-[1.72rem] leading-[3.67vw] text-gray-300 tracking-tighter">
            {sale}원
          </span>
          <span className="primary:text-[1.02rem] mobile:text-[2.18vw] text-[3.33vw] primary:leading-[1.625rem] leading-[3.47vw] text-gray-300 tracking-tighter">
            1박
          </span>
        </div>
      </div>
    </div>
  )
}
export default CampaignCard
