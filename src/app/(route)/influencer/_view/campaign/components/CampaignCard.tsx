import Image from 'next/image'

interface Props {
  img: string
  title: string
  price: string
  sale: string
}

function CampaignCard({ img, title, price, sale }: Props) {
  return (
    <div className="flex flex-col w-[12.34rem] h-[16.625rem] gap-[0.73rem]">
      <div className="relative w-[12.5rem] h-[9.56rem]">
        <Image src={img} alt={img} fill className="rounded-[1.125rem]" />
      </div>
      <div className="flex flex-col text-start gap-[0.29rem]">
        <span className="font-bold text-[0.89rem] tracking-tighter leading-[1.31rem] text-gray-300">{title}</span>
        <div className="flex text-[1.02rem] leading-[1.5rem] gap-2">
          <span className="line-through text-gray-100 tracking-tighter">{price}</span>
          <span className="text-[#FF5454] tracking-tighter">90%</span>
        </div>
        <div className="flex gap-[0.31rem]">
          <span className="font-bold text-[1.14rem] leading-[1.72rem] text-gray-300 tracking-tighter">{sale}원</span>
          <span className="text-[1.02rem] leading-[1.625rem] text-gray-300 tracking-tighter">1박</span>
        </div>
      </div>
    </div>
  )
}
export default CampaignCard
