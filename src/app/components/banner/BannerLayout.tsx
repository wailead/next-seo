import { ReactNode } from 'react'

function BannerLayout({ children }: { children: ReactNode }) {
  return (
    <section
      className={
        'w-full h-[7.5625rem] bg-white-300 text-gray-600 text-[1.2rem] font-[500] flex items-center justify-center'
      }>
      <div className="w-primary flex items-center gap-[2rem] justify-center">{children}</div>
    </section>
  )
}

export default BannerLayout
