import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Link> {
  name: string
  fontColor: 'white' | 'primary'
  buttonColor: 'primary-200' | 'primary-default' | 'white-default'
  icon?: JSX.Element
  border?: boolean
  textSize?: string
  px?: string
  py?: string
  width?: string
  height?: string
  flexCol?: string
}

function LinkButton({
  icon,
  name,
  fontColor,
  buttonColor,
  border,
  textSize = 'text-[0.65rem]',
  px = 'mobile:px-[4.62vw] ',
  py = 'mobile:py-[1.73vw] ',
  width,
  height,
  flexCol,
  ...linkProps
}: ButtonProps) {
  const textColor = fontColor === 'white' ? 'text-white-default' : 'text-primary-default'
  const linkColor = `bg-${buttonColor}`
  const borderColor = border ? `border-primary-default border-[0.098rem]` : ''
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
        `${px} ${py} ${width} ${height} ${flexCol} rounded-[1.82rem] flex items-center justify-center gap-[0.25rem] box-border`,
        'hover:shadow-sm hover:shadow-gray-200 transition duration-300',
        linkColor,
        borderColor,
        hoverColor,
        activeColor
      )}>
      {icon ? icon : null}
      <p className={twMerge(`font-pretendard ${textSize} font-semibold`, textColor)}>{name}</p>
    </Link>
  )
}

export default LinkButton
