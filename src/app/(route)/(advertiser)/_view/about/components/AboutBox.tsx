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
    <div className="primary:w-[37.92rem] w-[80.79vw] flex items-center primary:gap-[4.583rem] gap-[9.79vw] flex-shrink-0">
      <CustomImage
        src={`/assets/icons/about_image_${about.pageNum}.svg`}
        alt={`about 아이콘 ${about.pageNum}`}
        w="w-[9.75rem]"
        h="h-[9.75rem]"
      />
      <div className="flex flex-col primary:gap-[0.39rem] gap-[0.83vw] w-[63%]">
        <div className="flex justify-between">
          <h2 className="font-montserrat font-normal primary:text-[2.6rem] text-[5.56vw] primary:leading-[3.9rem] leading-[8.33vw] tracking-[-0.005rem] text-primary-default">
            {about.pageNum}
          </h2>
        </div>
        <h4 className="font-pretendard font-bold primary:text-[1.3rem] text-[2.78vw] primary:leading-[1.95rem] leading-[4.17vw] tracking-[-0.005rem] text-gray-300">
          {about.title}
        </h4>
        <p
          className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw] tracking-[-0.005rem] text-gray-600"
          dangerouslySetInnerHTML={{ __html: about.description }}
        />
      </div>
    </div>
  )
}

export default AboutBox
