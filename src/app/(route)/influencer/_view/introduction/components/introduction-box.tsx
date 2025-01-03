import { ReactNode } from 'react'

interface childrenProps {
  className?: string
  title: string
  description: string
  children?: ReactNode
  text?: ReactNode
}

function IntroductionBox({ className, title, description, children, text }: childrenProps) {
  return (
    <div className={`${className} primary:rounded-[1.04rem] rounded-[2.22vw] -z-10`}>
      <div className="flex flex-col primary:gap-[1.14rem] gap-[1.74vw] primary:pl-[2.6rem] pl-[5.56vw] primary:pt-[2.795rem] pt-[5.97vw]">
        <h1
          className="font-pretendard font-bold text-gray-600 primary:text-[1.56rem] text-[3.33vw]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="flex flex-col">
          <p
            className="font-pretendard font-normal text-gray-600 primary:text-[1.17rem] text-[2.5vw]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {text}
        </div>
      </div>
      {children}
    </div>
  )
}

export default IntroductionBox
