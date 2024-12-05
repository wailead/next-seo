import Image from 'next/image'

type Props = {
  src: string
  alt: string
  w: number | string
  h: number | string
} & React.ComponentPropsWithoutRef<typeof Image>
function CustomImage({ src, alt, w, h, ...props }: Props) {
  const width = typeof w === 'number' ? `w-[${w}rem]` : `w-[${w}]`
  const height = typeof h === 'number' ? `h-[${h}rem]` : `h-[${h}]`
  return (
    <div className={`${width} ${height} relative`}>
      <Image src={src} alt={alt} fill {...props} />
    </div>
  )
}

export default CustomImage
