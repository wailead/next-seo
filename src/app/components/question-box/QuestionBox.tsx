'use client'

import { useRef, useEffect, useState } from 'react'
import Chevron from '@/public/assets/icons/chevron.svg'

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
    <div className="primary:py-[1.235rem] py-[2.22vw] primary:px-[1.137rem] mobile:px-[2.64vw] px-[5.56vw] bg-white-200 rounded-[1.04rem] flex flex-col">
      <div className="flex justify-between gap-[4.44vw] items-center">
        <p className="font-pretendard font-semibold primary:text-[0.91rem] mobile:text-[1.94vw] text-[3.89vw] leading-[1.365rem] text-gray-600">
          Q. {question}
        </p>
        <div className="cursor-pointer" onClick={onToggle}>
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
        </div>
      </div>

      <div className="transition-[max-height] duration-500 linear overflow-hidden" style={{ maxHeight: `${height}px` }}>
        <div
          ref={contentRef}
          className="flex flex-col praimary:gap-[0.78rem] mobile:gap-[1.67vw] gap-[3.33vw] primary:pt-[0.78rem] mobile:pt-[1.67vw] pt-[2.22vw]">
          <hr className="border-0 bg-white-500 primary:h-[0.13rem] h-[0.14vw]" />
          <p className="font-pretendard font-medium text-[#757575] primary:text-[0.748rem] mobile:text-[1.63vw] text-[3.1vw] tracking-[-0.005rem]">
            {typeof answer === 'string' ? (
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            ) : (
              <>
                {isLinkFirst && answer.link && (
                  <a href={answer.link} target="_blank" rel="noopener noreferrer" className="text-[#2EC8C8] underline">
                    {answer.link}
                  </a>
                )}
                <span dangerouslySetInnerHTML={{ __html: answer.text }} />
                {!isLinkFirst && answer.link && (
                  <>
                    <br />
                    <a
                      href={answer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2EC8C8] underline">
                      {answer.link}
                    </a>
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuestionBox
