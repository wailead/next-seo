'use client'

import ArrowIcon from '@/public/assets/icons/about_arrow.svg'
import CircleIcon from '@/public/assets/icons/circle.svg'
import { useRef, useState } from 'react'

interface ItemCarouselProps {
  totalItems: number
  children: React.ReactNode
  className?: string
}

function ItemCarousel({ totalItems, children, className }: ItemCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const calculateCurrentIndex = () => {
    const container = scrollContainerRef.current
    if (!container) return currentIndex

    const scrollLeft = container.scrollLeft
    const totalScrollWidth = container.scrollWidth
    const itemWidth = totalScrollWidth / totalItems

    return Math.round(scrollLeft / itemWidth)
  }

  const handleScroll = (direction: 'next' | 'prev') => {
    const container = scrollContainerRef.current
    if (!container) return

    if (direction === 'next' && currentIndex >= totalItems - 1) return
    if (direction === 'prev' && currentIndex <= 0) return

    const itemWidth = container.scrollWidth / totalItems
    container.scrollLeft += direction === 'next' ? itemWidth : -itemWidth

    const newIndex = calculateCurrentIndex()
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  const handleScrollUpdate = () => {
    const newIndex = calculateCurrentIndex()
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  const renderCircles = () => {
    return Array.from({ length: totalItems }).map((_, index) => (
      <div key={index} className="flex items-center">
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === index ? '#2EC8C8' : '#D9D9D9'} />
        {index < totalItems - 1 && <div className="flex-grow h-[0.28vw] bg-gray-100" />}
      </div>
    ))
  }

  return (
    <div className="primary:pl-[2.503rem] mobile:pl-[5.35vw]">
      <div className="relative">
        <div className={`flex gap-[0.26rem] ${className}`}>
          <button onClick={() => handleScroll('prev')} disabled={currentIndex === 0} aria-label="이전 아이템 보기">
            <ArrowIcon
              className="primary:w-[1.365rem] mobile:w-[2.92vw] w-[6.67vw] primary:h-[1.365rem] mobile:h-[2.92vw] h-[6.67vw]"
              fill={currentIndex === 0 ? '#D9D9D9' : '#2EC8C8'}
            />
          </button>
          <button
            onClick={() => handleScroll('next')}
            disabled={currentIndex === totalItems - 1}
            aria-label="다음 아이템 보기">
            <ArrowIcon
              className="primary:w-[1.365rem] mobile:w-[2.92vw] w-[6.67vw] primary:h-[1.365rem] mobile:h-[2.92vw] h-[6.67vw]"
              transform="rotate(180)"
              fill={currentIndex === totalItems - 1 ? '#D9D9D9' : '#2EC8C8'}
            />
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory w-full scroll-smooth"
        onScroll={handleScrollUpdate}
        ref={scrollContainerRef}>
        <ul className="flex">{children}</ul>
      </div>
      <div className="mobile:hidden flex items-center pt-[5.56vw]">{renderCircles()}</div>
    </div>
  )
}

export default ItemCarousel
