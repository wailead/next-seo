import { ReactNode } from 'react'

interface titleFormProps {
  subtitle: string
  title: string
  children?: ReactNode
  pb?: string
}

function TitleForm({ subtitle, title, children, pb = 'pb-bottom' }: titleFormProps) {
  return (
    <div className={`px-x pt-top ${pb} flex flex-col gap-[1.82rem]`}>
      <div className="flex flex-col gap-[0.39rem]">
        <p className="font-montserrat font-normal text-[0.91rem] text-primary-default">{subtitle}</p>
        <p className="font-pretendard font-bold text-[1.56rem] text-gray-600">{title}</p>
      </div>
      {children}
    </div>
  )
}

export default TitleForm
