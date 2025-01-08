import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  images: StaticImageData[]
  selectTitle: string
}

function ReferenceSlideX({ images, selectTitle }: Props) {
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStartPosition({ x: e.clientX - position.x, y: position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return

    const newX = e.clientX - startPosition.x
    const newPositionX = Math.max(newX)
    setPosition({ x: newPositionX, y: position.x })
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  useEffect(() => {
    setPosition({ x: 0, y: 0 })
  }, [selectTitle])
  return (
    <div
      className={twMerge(`relative left-[-12.22vw] justify-center mobile:hidden   select-none`)}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ transform: `translateX(${position.x}px)` }}>
      {selectTitle === 'more' ? (
        <div className="flex gap-0 hover:pause-animation animate-reference-slide-left">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              height={240}
              className="select-none pointer-events-none"
            />
          ))}
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              height={240}
              className="select-none pointer-events-none"
            />
          ))}
        </div>
      ) : (
        <div className="flex  gap-0  hover:pause-animation animate-reference-slide-left">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              height={210}
              className="select-none-reverse pointer-events-none"
            />
          ))}
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              height={210}
              className="select-none-reverse pointer-events-none"
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default ReferenceSlideX
