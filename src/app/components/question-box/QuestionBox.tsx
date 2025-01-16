'use client'

import Chevron from '@/public/assets/icons/chevron.svg'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface QuestionBoxProps {
  question: string
  answer: string | { text: string; link?: string }
  isOpen: boolean
  onToggle: () => void
  isLinkFirst?: boolean
}

function QuestionBox({ question, answer, isOpen, onToggle, isLinkFirst = true }: QuestionBoxProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      const paddingTop = parseFloat(window.getComputedStyle(contentRef.current).paddingTop) || 0
      setHeight(isOpen ? contentHeight + paddingTop : 0)
    }
  }, [isOpen])

  return (
    <article className="primary:py-[1.04rem] mobile:py-[2.22vw] primary:px-[1.137rem] mobile:px-[2.64vw] px-[5.56vw] bg-white-200 rounded-[1.04rem] flex flex-col">
      <header className="flex justify-between gap-[4.44vw] items-center mobile:h-auto h-[11.10vw]">
        <h3 className="font-pretendard font-semibold primary:text-[0.91rem] mobile:text-[1.94vw] text-[3.89vw] leading-[1.365rem] text-gray-600">
          Q. {question}
        </h3>
        <button className="cursor-pointer" aria-label="펼치기" onClick={onToggle}>
          <Chevron
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: 'transform 0.3s linear',
            }}
            stroke={isOpen ? '#2EC8C8' : '#222222'}
            width="0.9rem"
            height="0.9rem"
            strokeWidth="3.5"
          />
        </button>
      </header>

      <div className="transition-[max-height] duration-500 linear overflow-hidden" style={{ maxHeight: `${height}px` }}>
        <div
          ref={contentRef}
          className="flex flex-col praimary:gap-[0.78rem] mobile:gap-[1.67vw] gap-[3.33vw] primary:pb-[0.78rem] mobile:pb-[1.67vw] pb-[2.22vw]">
          <hr className="border-0 bg-white-500 primary:h-[0.13rem] h-[0.14vw]" />
          <div className="font-pretendard font-medium text-[#757575] primary:text-[0.748rem] mobile:text-[1.63vw] text-[3.1vw] tracking-[-0.005rem]">
            {typeof answer === 'string' ? (
              <span>{answer}</span>
            ) : (
              <>
                {isLinkFirst && answer.link && (
                  <Link
                    href={answer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2EC8C8] underline">
                    {answer.link}
                  </Link>
                )}
                {answer.text.split('\n').map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
                {!isLinkFirst && answer.link && (
                  <Link
                    href={answer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2EC8C8] underline">
                    {answer.link}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default QuestionBox
