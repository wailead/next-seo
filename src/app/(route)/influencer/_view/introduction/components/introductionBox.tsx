import { ReactNode } from 'react'

interface childrenProps {
  className?: string
  title: string
  description: string
  children?: ReactNode
}

function IntroductionBox({ className, title, description, children }: childrenProps) {
  return (
    <div className={`${className} rounded-[1.04rem]`}>
      <div className="flex flex-col gap-[1.14rem] pl-[2.6rem] pt-[2.795rem]">
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
