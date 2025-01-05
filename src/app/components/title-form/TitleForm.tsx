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
  gap?: string
}

function TitleForm({
  subtitle,
  title,
  children,
  pb = 'primary:pb-bottom pb-[8.32vw]',
  pr,
  titleColor,
  subTitleColor,
  className,
  gap = 'primary:gap-[1.82rem] gap-[3.87vw]',
}: titleFormProps) {
  return (
    <div
      className={twMerge(
        `primary:px-x px-[6.93vw] primary:pt-top pt-[6.24vw] ${pb} flex flex-col ${gap} ${className}`,
        pr
      )}>
      <div className="flex flex-col primary:gap-[0.39rem] gap-[0.83vw]">
        <p
          className={twMerge(
            `font-montserrat font-normal primary:text-[0.91rem] text-[1.94vw] text-primary-default`,
            titleColor
          )}>
          {subtitle}
        </p>
        <p
          className={twMerge(
            `font-pretendard font-bold primary:text-[1.56rem] text-[3.33vw] text-gray-600 whitespace-pre-line `,
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
