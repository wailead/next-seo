import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Link> {
  name: string
  fontColor: 'white' | 'primary'
  buttonColor: 'primary-200' | 'primary-default' | 'white-default'
  icon?: JSX.Element
  border?: boolean
}

function LinkButton({ icon, name, fontColor, buttonColor, border, ...linkProps }: ButtonProps) {
  const textColor = fontColor === 'white' ? 'text-white' : 'text-primary-default'
  const linkColor = `bg-${buttonColor}`
  const borderColor = border ? `border-primary-default border-[2px]` : ''
  const hoverColor = `hover:bg-${buttonColor}/70`
  const activeColor = `active:bg-${buttonColor}/60`
  return (
    <Link
      {...linkProps}
      className={twMerge(
        `px-[16.64px] py-[6.24px] rounded-[29.12px] flex items-center justify-center gap-[4px]`,
        'hover:shadow-sm hover:shadow-gray-200 transition duration-300',
        linkColor,
        borderColor,
        hoverColor,
        activeColor
      )}>
      {icon ? icon : null}
      <p className={twMerge(`font-pretendard text-[13px] font-semibold`, textColor)}>{name}</p>
    </Link>
  )
}

export default LinkButton
