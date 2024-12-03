import { ReactNode } from 'react'

interface childrenProps {
  children?: ReactNode
  className?:string
}

function IntroductionBox({ children, className}: childrenProps) {
  return (
    <div className={`${className} rounded-[16.64px]`}>
      <div className='flex flex-col gap-[18.2px] pl-[41.6px] pt-[44.72px]'>
        <h1 className="font-pretendard font-bold text-gray-600 text-[24.96px]">SNS 채널만 가지고 있다면!</h1>
        <p className='font-pretendard font-normal text-gray-600 text-[18.72px]'>
          와이리에서는 타 체험단 사이트와 비교하여
          <br />
          가장 많은 SNS 종류를 승인해드리고 있어요!
        </p>
      </div>
      {children}
    </div>
  )
}

export default IntroductionBox
