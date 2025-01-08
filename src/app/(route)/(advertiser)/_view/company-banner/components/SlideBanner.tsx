'use client'

import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  logos: StaticImageData[]
  direction: 'left' | 'right'
}

interface Position {
  x: number
  y: number
}

function SlideBanner({ logos, direction }: Props) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [dragging, setDragging] = useState<boolean>(false)
  const lastMousePosition = useRef<Position>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    setDragging(true)
    lastMousePosition.current = { x: e.clientX, y: e.clientY }
    const computedStyle = window.getComputedStyle(containerRef.current.children[0])
    const matrix = new WebKitCSSMatrix(computedStyle.transform)
    setPosition({ x: matrix.m41, y: 0 })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return
    const deltaX = e.clientX - lastMousePosition.current.x
    setPosition(prev => ({ ...prev, x: prev.x + deltaX }))
    lastMousePosition.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  const slideDirection = direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'

  return (
    <div className="flex w-screen items-center justify-center">
      <div
        className="flex w-fit overflow-hidden"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <div
          className={twMerge('flex gap-4 hover:pause-animation', !dragging && slideDirection)}
          style={{
            transform: `translateX(${position.x}px)`,
            cursor: dragging ? 'grabbing' : 'grab',
          }}>
          <ul className="flex gap-4">
            {logos.map((image, index) => (
              <li
                key={index}
                className={
                  'w-[136px] h-[44px] bg-white-default flex-shrink-0 rounded-lg flex items-center justify-center border-white-300 border-[1px]'
                }>
                <Image
                  className="select-none pointer-events-none px-8 py-2 "
                  src={image}
                  alt={`Logo ${index + 1}`}
                  width={130}
                  height={38}
                />
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {logos.map((image, index) => (
              <li
                key={`clone-${index}`}
                className={
                  'w-[144px] h-[48px] bg-white-default flex-shrink-0 rounded-lg flex items-center justify-center border-white-300 border-[1px]'
                }>
                <Image
                  className="select-none pointer-events-none px-8 py-2"
                  src={image}
                  alt={`Logo ${index + 1}`}
                  width={130}
                  height={38}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SlideBanner
