import { ReactNode } from "react"

interface titleFormProps {
  subtitle: string
  title: string
  children?:ReactNode
  pb?:string
}

function TitleForm({ subtitle, title, children, pb = "pb-bottom" }: titleFormProps) {
  return (
    <div className={`px-x pt-top ${pb} flex flex-col gap-[29.12px]`}>
      <div className="flex flex-col gap-[6.24px]">
        <p className="font-montserrat font-normal text-[14.56px] text-primary-default">{subtitle}</p>
        <p className="font-pretendard font-bold text-[24.96px] text-gray-600">{title}</p>
      </div>
      {children}
    </div>
  )
}

export default TitleForm
