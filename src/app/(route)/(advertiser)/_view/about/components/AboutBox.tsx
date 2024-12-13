import CustomImage from '@/components/custom-image/CustomImage'
import ArrowIcon from '@/public/assets/icons/about_arrow.svg'

interface AboutBoxProps {
  pageNum: string
  title: string
  description: string
}

function AboutBox({ pageNum, title, description }: AboutBoxProps) {
  return (
    <div className="flex gap-[4.583rem]">
      <CustomImage
        src={`/assets/icons/about_image_${pageNum}.svg`}
        alt="about 아이콘 1"
        w="w-[11.375rem]"
        h="h-[11.375rem]"
      />
      <div className="flex flex-col gap-[0.39rem]">
        <div className="flex justify-between">
          <h2 className="font-montserrat font-normal text-[2.6rem] leading-[3.9rem] tracking-[-0.005rem] text-primary-default">
            {pageNum}
          </h2>
          <div className="flex gap-[0.26rem]">
            <ArrowIcon width="1.365rem" height="1.365rem" fill="#2EC8C8" />
            <ArrowIcon width="1.365rem" height="1.365rem" transform="rotate(180)" fill="#2EC8C8" />
          </div>
        </div>
        <h4 className="font-pretendard font-bold text-[1.3rem] leading-[1.95rem] tracking-[-0.005rem] text-gray-300">
          {title}
        </h4>
        <p
          className="font-pretendard font-normal text-[0.91rem] leading-[1.365rem] tracking-[-0.005rem] text-gray-600 w-[24rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  )
}

export default AboutBox
