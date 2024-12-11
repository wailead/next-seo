import { ReactNode } from 'react'

interface titleFormProps {
  subtitle: string
  title: string
  children?: ReactNode
  pb?: string
  className?: string
}

function TitleForm({ subtitle, title, children, pb = 'pb-bottom', className }: titleFormProps) {
  return (
    <div className={`px-x pt-top ${pb} flex flex-col gap-[1.82rem] ${className}`}>
      <div className="flex flex-col gap-[0.39rem]">
        <p className="font-montserrat font-normal text-[0.91rem] text-primary-default">{subtitle}</p>
        <p
          className="font-pretendard font-bold text-[1.56rem] text-gray-600"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      {children}
    </div>
  )
}

export default TitleForm
