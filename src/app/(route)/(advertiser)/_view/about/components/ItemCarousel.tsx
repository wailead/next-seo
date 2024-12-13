'use client'

import ArrowIcon from '@/public/assets/icons/about_arrow.svg'

interface ItemCarouselProps {
  totalItems: number
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  className?: string
}

function ItemCarousel({ totalItems, currentIndex, setCurrentIndex, className }: ItemCarouselProps) {
  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className={`flex gap-[0.26rem] ${className}`}>
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        <ArrowIcon width="1.365rem" height="1.365rem" fill={currentIndex === 0 ? '#D9D9D9' : '#2EC8C8'} />
      </button>
      <button onClick={handleNext} disabled={currentIndex === totalItems - 1}>
        <ArrowIcon
          width="1.365rem"
          height="1.365rem"
          transform="rotate(180)"
          fill={currentIndex === totalItems - 1 ? '#D9D9D9' : '#2EC8C8'}
        />
      </button>
    </div>
  )
}

export default ItemCarousel
