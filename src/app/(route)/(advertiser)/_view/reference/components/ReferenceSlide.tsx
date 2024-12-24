import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
  images: StaticImageData[]
  selectTitle: string
}

function ReferenceSlide({ images, selectTitle }: Props) {
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStartPosition({ x: position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return

    const newY = e.clientY - startPosition.y
    const newPositionY = Math.max(newY)
    setPosition({ x: position.x, y: newPositionY })
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  useEffect(() => {
    setPosition({ x: 0, y: 0 })
  }, [selectTitle])
  return (
    <div
      className="relative select-none"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ transform: `translateY(${position.y}px)` }}>
      {selectTitle === 'more' ? (
        <div className="flex flex-col-reverse gap-0 hover:pause-animation animate-slide-bottom-more">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={240}
              className="select-none pointer-events-none"
            />
          ))}
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={240}
              className="select-none pointer-events-none"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-0  hover:pause-animation animate-slide-bottom">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={210}
              className="select-none-reverse pointer-events-none"
            />
          ))}
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={210}
              className="select-none-reverse pointer-events-none"
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default ReferenceSlide
