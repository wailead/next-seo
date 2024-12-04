import React from 'react'

interface ChevronProps {
  rotate?: number
  color?: string
}

function Chevron({ rotate = 0, color = '#222222' }: ChevronProps) {
  return (
    <svg
      width="24.96"
      height="24.96"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.3s linear',
      }}>
      <path d="M40 16L24 32L8 16" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Chevron
