'use client'

import { useRef, useEffect, useState } from 'react'
import { Chevron } from '../../../../../../../public/icons'

interface QuestionBoxProps {
  question: string
  answer: string | { text: string; link?: string }
  isOpen: boolean
  onToggle: () => void
}

function QuestionBox({ question, answer, isOpen, onToggle }: QuestionBoxProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="px-[1.235rem] py-[1.137rem] bg-white-200 rounded-[1.04rem] flex flex-col gap-[0.78rem]">
      <div className="flex justify-between items-center">
        <p className="font-pretendard font-medium text-[0.91rem] leading-[1.365rem] text-gray-600">Q. {question}</p>
        <div className="cursor-pointer" onClick={onToggle}>
          <Chevron rotate={isOpen ? 180 : 0} color={isOpen ? '#2EC8C8' : '#222222'} />
        </div>
      </div>

      <div className="transition-[max-height] duration-500 linear overflow-hidden" style={{ maxHeight: `${height}px` }}>
        <div ref={contentRef} className="flex flex-col gap-[0.78rem]">
          <hr className="bg-white-400 h-[0.13rem]" />
          <p className="font-pretendard font-normal text-[#757575] text-[0.78rem]">
            {typeof answer === 'string' ? (
              answer
            ) : (
              <>
                {answer.link && (
                  <a href={answer.link} target="_blank" rel="noopener noreferrer" className="text-[#2EC8C8] underline">
                    {answer.link}
                  </a>
                )}
                {answer.text}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuestionBox
