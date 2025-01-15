import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  images: StaticImageData[]
  selectTitle: string
}

function ReferenceSlideY({ images, selectTitle }: Props) {
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [slideHeight, setSlideHeight] = useState(0)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const slideRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStartPosition({ x: position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return

    const newY = e.clientY - startPosition.y
    const newPositionY = Math.max(newY % (slideHeight / 4))
    setPosition({ x: position.x, y: newPositionY })
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  useEffect(() => {
    if (slideRef.current) {
      const height = slideRef.current.offsetHeight
      setSlideHeight(height)
    }
    setPosition({ x: 0, y: 0 })
  }, [selectTitle])

  console.log(slideHeight)
  return (
    <div
      className={twMerge(
        `relative select-none`,
        selectTitle === 'more' ? 'primary:w-[15rem] w-[32vw]' : 'primary:w-[13.125rem] w-[28vw]'
      )}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ transform: `translateY(${position.y - slideHeight / 8}px)` }}>
      {selectTitle === 'more' ? (
        <div
          className="flex flex-col-reverse items-center gap-0 hover:pause-animation animate-slide-bottom-more "
          ref={slideRef}>
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
        <div className="flex flex-col-reverse gap-0 hover:pause-animation animate-slide-bottom" ref={slideRef}>
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={210}
              className="select-none pointer-events-none"
            />
          ))}
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              width={210}
              className="select-none pointer-events-none"
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default ReferenceSlideY
