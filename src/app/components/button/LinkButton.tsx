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
  const textColor = fontColor === 'white' ? 'text-white-default' : 'text-primary-default'
  const linkColor = `bg-${buttonColor}`
  const borderColor = border ? `border-primary-default border-[3px]` : ''
  const hoverColor = ((color: string) => {
    return {
      'primary-200': 'hover:bg-primary-200/80',
      'primary-default': 'hover:bg-primary-default/80',
      'white-default': 'hover:bg-white-default/80',
    }[color]
  })(buttonColor)
  const activeColor = ((color: string) => {
    return {
      'primary-200': 'active:bg-primary-200/70',
      'primary-default': 'active:bg-primary-default/70',
      'white-default': 'active:bg-white-default/70',
    }[color]
  })(buttonColor)
  return (
    <Link
      {...linkProps}
      className={twMerge(
        `px-[16.64px] py-[7px] rounded-[29.12px] flex items-center justify-center gap-[4px]`,
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
