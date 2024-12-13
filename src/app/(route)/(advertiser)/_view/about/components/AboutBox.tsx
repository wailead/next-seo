'use client'

import CustomImage from '@/components/custom-image/CustomImage'
import { useState } from 'react'

interface AboutBoxProps {
  about: {
    pageNum: string
    title: string
    description: string
  }
  onTouchMove: (direction: 'left' | 'right') => void
}

function AboutBox({ about, onTouchMove }: AboutBoxProps) {
  const [touchStart, setTouchStart] = useState<number>(0)
  const [touchEnd, setTouchEnd] = useState<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)

    if (touchStart - touchEnd > 50) {
      onTouchMove('right')
    } else if (touchEnd - touchStart > 50) {
      onTouchMove('left')
    }
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex gap-[4.583rem] pl-[2.503rem] h-[12.074rem]">
      <CustomImage
        src={`/assets/icons/about_image_${about.pageNum}.svg`}
        alt={`about 아이콘 ${about.pageNum}`}
        w="w-[11.375rem]"
        h="h-[11.375rem]"
      />
      <div className="flex flex-col gap-[0.39rem] w-[58%]">
        <div className="flex justify-between">
          <h2 className="font-montserrat font-normal text-[2.6rem] leading-[3.9rem] tracking-[-0.005rem] text-primary-default">
            {about.pageNum}
          </h2>
        </div>
        <h4 className="font-pretendard font-bold text-[1.3rem] leading-[1.95rem] tracking-[-0.005rem] text-gray-300">
          {about.title}
        </h4>
        <p
          className="font-pretendard font-normal text-[0.91rem] leading-[1.365rem] tracking-[-0.005rem] text-gray-600"
          dangerouslySetInnerHTML={{ __html: about.description }}
        />
      </div>
    </div>
  )
}

export default AboutBox
