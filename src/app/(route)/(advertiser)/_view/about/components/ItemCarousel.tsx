'use client'

import { useRef } from 'react'
import ArrowIcon from '@/public/assets/icons/about_arrow.svg'

interface ItemCarouselProps {
  totalItems: number
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
  className?: string
}

function ItemCarousel({ totalItems, currentIndex, setCurrentIndex, children, className }: ItemCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (currentIndex < totalItems - 1 && scrollContainerRef.current) {
      setCurrentIndex(currentIndex + 1)
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.scrollWidth / totalItems
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      scrollContainerRef.current.scrollLeft = (scrollContainerRef.current.scrollWidth / totalItems) * newIndex
    }
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const scrollLeft = scrollContainerRef.current.scrollLeft
    const scrollWidth = scrollContainerRef.current.scrollWidth

    const newIndex = Math.round(scrollLeft / (scrollWidth / totalItems))

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="primary:pl-[2.503rem] pl-[5.35vw]">
      <div className="relative">
        <div className={`flex gap-[0.26rem] ${className}`}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowIcon
              className="primary:w-[1.365rem] w-[2.92vw] primary:h-[1.365rem] h-[2.92vw]"
              fill={currentIndex === 0 ? '#D9D9D9' : '#2EC8C8'}
            />
          </button>
          <button onClick={handleNext} disabled={currentIndex === totalItems - 1}>
            <ArrowIcon
              className="primary:w-[1.365rem] w-[2.92vw] primary:h-[1.365rem] h-[2.92vw]"
              transform="rotate(180)"
              fill={currentIndex === totalItems - 1 ? '#D9D9D9' : '#2EC8C8'}
            />
          </button>
        </div>
      </div>

      <div
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory w-full scroll-smooth"
        onScroll={handleScroll}
        ref={scrollContainerRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  )
}

export default ItemCarousel
