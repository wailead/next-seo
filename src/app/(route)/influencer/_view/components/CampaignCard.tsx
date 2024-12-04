import Image from 'next/image'

interface Props {
  img: string
  title: string
  price: string
  sale: string
}

function CampaignCard({ img, title, price, sale }: Props) {
  return (
    <div className="flex flex-col w-[197.5px] h-[266px] gap-[11.7px]">
      <Image src={img} alt={img} width={200} height={153} className="rounded-[18px]" />
      <div className="flex flex-col text-start gap-[4.6px]">
        <span className="font-bold text-[14.2px] tracking-tighter leading-[21px] text-gray-300">{title}</span>
        <div className="flex  text-[16.3px] leading-[24px] gap-2">
          <span className="line-through text-gray-100 tracking-tighter">{price}</span>
          <span className="text-[#FF5454] tracking-tighter">90%</span>
        </div>
        <div className="flex gap-[5px]">
          <span className="font-bold text-[18.3px] leading-[27.5px] text-gray-300 tracking-tighter">{sale}원</span>
          <span className="text-[16.3px] leading-[26px] text-gray-300 tracking-tighter">1박</span>
        </div>
      </div>
    </div>
  )
}
export default CampaignCard
