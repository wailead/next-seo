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
  const textColor = fontColor === 'white' ? 'text-white' : 'text-primary'
  const linkColor = `bg-${buttonColor}`
  const borderColor = border ? `border-primary-default` : ''
  const hoverColor = `hover:bg-${linkColor}/90`
  const activeColor = `active:bg-${linkColor}/75`
  return (
    <Link
      {...linkProps}
      target="_blank"
      className={twMerge(
        `px-[16.64px] w-[100px] h-[30px] py-[6.24px] rounded-[29.12px] flex items-center justify-center gap-[4px]`,
        'hover:shadow-sm hover:shadow-gray-200 transition duration-300',
        linkColor,
        borderColor,
        hoverColor,
        activeColor
      )}>
      {icon ? icon : null}
      <p className={twMerge(`font-pretendard font-normal text-[10.4px]`, textColor)}>{name}</p>
    </Link>
  )
}

export default LinkButton
