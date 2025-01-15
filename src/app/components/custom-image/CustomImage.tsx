import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  src: string | StaticImageData
  alt: string
  w: string
  h: string
  rounded?: string
  bgColor?: string
  priority?: boolean
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, rounded, bgColor, priority, ...ImgaeProps }: Props) {
  return (
    <div className={twMerge(`relative`, w, h)}>
      <Image
        src={src}
        alt={alt}
        fill
        {...ImgaeProps}
        priority={priority}
        className={twMerge(`${bgColor} ${rounded}`)}
      />
    </div>
  )
}

export default CustomImage
