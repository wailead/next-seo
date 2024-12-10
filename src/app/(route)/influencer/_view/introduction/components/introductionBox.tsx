import { ReactNode } from 'react'

interface childrenProps {
  className?: string
  title: string
  description: string
  children?: ReactNode
}

function IntroductionBox({ className, title, description, children }: childrenProps) {
  return (
    <div className={`${className}  rounded-[1.39vw] -z-10`}>
      <div className="flex flex-col gap-[1.52vw] pl-[3.47vw] pt-[3.73vw]">
        <h1
          className="font-pretendard font-bold text-gray-600 text-[1.56rem]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="font-pretendard font-normal text-gray-600 text-[1.17rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {children}
    </div>
  )
}

export default IntroductionBox
