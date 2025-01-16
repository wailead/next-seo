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
    <article className={`${className} primary:rounded-[1.04rem] rounded-[2.22vw] -z-10`}>
      <header className="flex flex-col primary:gap-[1.14rem] gap-[1.74vw] primary:px-[2.6rem] px-[5.56vw] primary:pt-[2.795rem] pt-[5.97vw]">
        <h2 className="font-pretendard font-bold text-gray-600 primary:text-[1.56rem] mobile:text-[3.33vw] text-[5.56vw]">
          {title}
        </h2>
        <div className="flex flex-col">
          <p className="font-pretendard font-normal text-gray-600 primary:text-[1.17rem] mobile:text-[2.5vw] text-[4.44vw]">
            {description}
          </p>
          {text}
        </div>
      </header>
      {children && <div>{children}</div>}
    </article>
  )
}

export default IntroductionBox
