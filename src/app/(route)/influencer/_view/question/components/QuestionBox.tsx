'use client'

import { useState } from 'react'
import { Chevron } from '../../../../../../../public/icons'

interface QuestionBoxProps {
  question: string
  answer: string | { text: string; link?: string }
}

function QuestionBox({ question, answer }: QuestionBoxProps) {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setIsToggle(!isToggle)
  }

  return (
    <div className="px-[1.235rem] py-[1.137rem] bg-white-200 rounded-[1.04rem] flex flex-col gap-[0.78rem]">
      <div className="flex justify-between items-center">
        <p className="font-pretendard font-medium text-[0.91rem] text-gray-600">Q. {question}</p>
        <div className="cursor-pointer" onClick={toggleOpen}>
          <Chevron rotate={isToggle ? 180 : 0} color={isToggle ? '#2EC8C8' : '#222222'} />
        </div>
      </div>
      {isToggle && (
        <>
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
        </>
      )}
    </div>
  )
}

export default QuestionBox
