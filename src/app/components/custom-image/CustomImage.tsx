import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string | StaticImageData
  alt: string
  w: string
  h: string
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, ...ImgaeProps }: Props) {
  return (
    <div className={twMerge(`relative`, w, h)}>
      <Image src={src} alt={alt} fill {...ImgaeProps} className="object-contain" />
    </div>
  )
}

export default CustomImage
