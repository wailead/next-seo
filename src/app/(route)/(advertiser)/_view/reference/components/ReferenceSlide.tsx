import Image, { StaticImageData } from 'next/image'

interface Props {
  images: StaticImageData[]
  selectTitle: string
}

function ReferenceSlide({ images, selectTitle }: Props) {
  return (
    <div className="relative items-center justify-center ">
      {selectTitle === 'more' ? (
        <div className="flex flex-col gap-0 animate-slide-bottom-more hover:pause-animation">
          {images.map((image, index) => (
            <Image src={image} key={index} alt={`Logo ${index + 1}`} width={240} />
          ))}
          {images.map((image, index) => (
            <Image src={image} key={index} alt={`Logo ${index + 1}`} width={240} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-0 animate-slide-bottom hover:pause-animation">
          {images.map((image, index) => (
            <Image src={image} key={index} alt={`Logo ${index + 1}`} width={210} />
          ))}
          {images.map((image, index) => (
            <Image src={image} key={index} alt={`Logo ${index + 1}`} width={210} />
          ))}
        </div>
      )}
    </div>
  )
}
export default ReferenceSlide
