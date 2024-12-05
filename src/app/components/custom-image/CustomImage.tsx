import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string
  alt: string
  w: string
  h: string
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, ...props }: Props) {
  return (
    <div className={twMerge(`relative`, w, h)}>
      <Image src={src} alt={alt} fill {...props} />
    </div>
  )
}

export default CustomImage
