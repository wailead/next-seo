import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string
  alt: string
  w: string
  h: string
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, ...ImgaeProps }: Props) {
  return (
    <div className={twMerge(`relative`, w, h)}>
      <Image src={src} alt={alt} fill {...ImgaeProps} />
    </div>
  )
}

export default CustomImage
