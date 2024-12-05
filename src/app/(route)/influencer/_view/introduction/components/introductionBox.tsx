import { ReactNode } from 'react'

interface childrenProps {
  className?: string
  title: string
  description: string
  children?: ReactNode
}

function IntroductionBox({ className, title, description, children }: childrenProps) {
  return (
    <div className={`${className} rounded-[16.64px]`}>
      <div className="flex flex-col gap-[18.2px] pl-[41.6px] pt-[44.72px]">
        <h1 className="font-pretendard font-bold text-gray-600 text-[24.96px]"  dangerouslySetInnerHTML={{ __html: title }} />
        <p className="font-pretendard font-normal text-gray-600 text-[18.72px]"  dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      {children}
    </div>
  )
}

export default IntroductionBox
