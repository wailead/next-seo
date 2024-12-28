import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string | StaticImageData
  alt: string
  w: string
  h: string
  rounded?: string
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, rounded, ...ImgaeProps }: Props) {
  return (
    <div className={twMerge(`relative`, w, h)}>
      <Image src={src} alt={alt} fill {...ImgaeProps} className={(twMerge(`object-contain`), rounded)} />
    </div>
  )
}

export default CustomImage
