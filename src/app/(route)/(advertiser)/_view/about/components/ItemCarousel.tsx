'use client'

import ArrowIcon from '@/public/assets/icons/about_arrow.svg'
import CircleIcon from '@/public/assets/icons/circle.svg'
import { useEffect, useRef } from 'react'

interface ItemCarouselProps {
  totalItems: number
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  children: React.ReactNode
  className?: string
}

function ItemCarousel({ totalItems, currentIndex, setCurrentIndex, children, className }: ItemCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

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
    <div className="primary:pl-[2.503rem] mobile:pl-[5.35vw]">
      <div className="relative">
        <div className={`flex gap-[0.26rem] ${className}`}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowIcon
              className="primary:w-[1.365rem] mobile:w-[2.92vw] w-[6.67vw] primary:h-[1.365rem] mobile:h-[2.92vw] h-[6.67vw]"
              fill={currentIndex === 0 ? '#D9D9D9' : '#2EC8C8'}
            />
          </button>
          <button onClick={handleNext} disabled={currentIndex === totalItems - 1}>
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
        onScroll={handleScroll}
        ref={scrollContainerRef}>
        <div className="flex">{children}</div>
      </div>
      <div className="mobile:hidden flex items-center pt-[5.56vw]">
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 0 ? '#2EC8C8' : '#D9D9D9'} />
        <div className="flex-grow h-[0.28vw] bg-gray-100" />
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 1 ? '#2EC8C8' : '#D9D9D9'} />
        <div className="flex-grow h-[0.28vw] bg-gray-100" />
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 2 ? '#2EC8C8' : '#D9D9D9'} />
        <div className="flex-grow h-[0.28vw] bg-gray-100" />
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 3 ? '#2EC8C8' : '#D9D9D9'} />
        <div className="flex-grow h-[0.28vw] bg-gray-100" />
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 4 ? '#2EC8C8' : '#D9D9D9'} />
        <div className="flex-grow h-[0.28vw] bg-gray-100" />
        <CircleIcon className="w-[1.67vw] h-[1.67vw]" fill={currentIndex === 5 ? '#2EC8C8' : '#D9D9D9'} />
      </div>
    </div>
  )
}

export default ItemCarousel
