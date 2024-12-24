import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  white?: boolean
  children: ReactNode
}
function BannerLayout({ white, children }: Props) {
  return (
    <section
      className={twMerge(
        'w-full py-[4vw] primary:py-[2rem] bg-white-200 text-gray-600 text-[1.2rem] font-[500] flex items-center justify-center',
        white && 'bg-white-default'
      )}>
      {!white && <div className="w-primary flex items-center gap-[2rem] justify-center">{children}</div>}
      {white && children}
    </section>
  )
}

export default BannerLayout
