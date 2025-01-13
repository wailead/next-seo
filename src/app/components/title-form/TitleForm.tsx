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
  px?: string
}

function TitleForm({
  subtitle,
  title,
  children,
  pb = 'primary:pb-bottom mobile:pb-[8.32vw] pb-[16.67vw]',
  pr,
  titleColor,
  subTitleColor,
  className,
  gap = 'primary:gap-[1.82rem] mobile:gap-[3.87vw] gap-[6.67vw]',
  px = 'px-[8.33vw]',
}: titleFormProps) {
  return (
    <div
      className={twMerge(
        `primary:px-x mobile:px-[6.93vw] ${px} primary:pt-top mobile:pt-[6.24vw] pt-[12.22vw] ${pb} flex flex-col ${gap} ${className}`,
        pr
      )}>
      <header className="flex flex-col primary:gap-[0.39rem] mobile:gap-[0.83vw] gap-[1.67vw]">
        <h4
          className={twMerge(
            `font-montserrat font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[4.17vw] text-primary-default`,
            titleColor
          )}>
          {subtitle}
        </h4>
        <h1
          className={twMerge(
            `font-pretendard font-bold primary:text-[1.56rem] mobile:text-[3.33vw] text-[6.67vw] text-gray-600 whitespace-pre-line `,
            subTitleColor
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </header>
      {children}
    </div>
  )
}

export default TitleForm
