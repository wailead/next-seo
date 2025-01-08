'use client'

import CustomImage from '@/components/custom-image/CustomImage'

interface AboutBoxProps {
  about: {
    pageNum: string
    title: string
    description: string
  }
}

function AboutBox({ about }: AboutBoxProps) {
  return (
    <div className="primary:w-[37.92rem] mobile:w-[80.79vw] w-[86.73vw] flex mobile:flex-row flex-col items-center primary:gap-[4.583rem] mobile:gap-[9.79vw] gap-[6.67vw] flex-shrink-0">
      <CustomImage
        src={`/assets/icons/about_image_${about.pageNum}.svg`}
        alt={`about 아이콘 ${about.pageNum}`}
        w="mobile:w-[9.75rem] w-[61.11vw]"
        h="mobile:h-[9.75rem] h-[61.11vw]"
      />
      <div className="flex flex-col primary:gap-[0.39rem] mobile:gap-[0.83vw] gap-[2.22vw] mobile:w-[63%] w-full">
        <h2 className="font-montserrat font-normal primary:text-[2.6rem] mobile:text-[5.56vw] text-[8.33vw] primary:leading-[3.9rem] mobile:leading-[8.33vw] leading-[12.50vw] tracking-[-0.005rem] text-primary-default">
          {about.pageNum}
        </h2>
        <h4 className="font-pretendard font-bold primary:text-[1.3rem] mobile:text-[2.78vw] text-[5.56vw] primary:leading-[1.95rem] mobile:leading-[4.17vw] leading-[8.33vw] tracking-[-0.005rem] text-gray-300">
          {about.title}
        </h4>
        <p
          className="font-pretendard font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[3.89vw] primary:leading-[1.365rem] mobile:leading-[2.92vw] leading-[5.56vw]  mobile:h-auto h-[26.39vw] tracking-[-0.005rem] text-gray-600"
          dangerouslySetInnerHTML={{ __html: about.description }}
        />
      </div>
    </div>
  )
}

export default AboutBox
