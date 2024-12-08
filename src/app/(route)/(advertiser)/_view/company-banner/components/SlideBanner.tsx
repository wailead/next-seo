import CustomImage from '@/components/custom-image/CustomImage'
import { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
  logos: StaticImageData[]
  direction: 'left' | 'right'
}

function SlideBanner({ logos, direction }: Props) {
  const slideDirection = direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex w-fit overflow-hidden">
        <div className={twMerge('flex gap-4', slideDirection)}>
          <ul className="flex gap-4">
            {logos.map((image, index) => (
              <li
                key={index}
                className={
                  'px-8 py-1 bg-white-default flex-shrink-0 rounded-lg flex items-center justify-center border-1 border-gray-200'
                }>
                <CustomImage src={image} alt={`Logo ${index + 1}`} w="w-[60px]" h="h-[30px]" />
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {logos.map((image, index) => (
              <li
                key={`clone-${index}`}
                className={
                  'px-8 py-1 bg-white-default flex-shrink-0 rounded-lg flex items-center justify-center border-1 border-gray-200'
                }>
                <CustomImage src={image} alt={`Logo ${index + 1}`} w="w-[60px]" h="h-[30px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SlideBanner
