import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface titleFormProps {
  subtitle: string
  title: string
  children?: ReactNode
  pb?: string
  pr?: string
  titleColor?: string
  subTitleColor?: string
  className?: string
}

function TitleForm({
  subtitle,
  title,
  children,
  pb = 'pb-bottom',
  pr,
  titleColor,
  subTitleColor,
  className,
}: titleFormProps) {
  return (
    <div className={twMerge(`px-x pt-top ${pb} flex flex-col gap-[1.82rem] ${className}`, pr)}>
      <div className="flex flex-col gap-[0.39rem]">
        <p className={twMerge(`font-montserrat font-normal text-[0.91rem] text-primary-default`, titleColor)}>
          {subtitle}
        </p>
        <p
          className={twMerge(
            `font-pretendard font-bold text-[1.56rem] text-gray-600 whitespace-pre-line `,
            subTitleColor
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      {children}
    </div>
  )
}

export default TitleForm
