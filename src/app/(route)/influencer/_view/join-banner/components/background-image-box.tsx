import CustomImage from '@/components/custom-image/CustomImage'

function BackgroundImageBox() {
  // bg-[url('/images/web/influencer/background.png')]  bg-contain bg-center
  return (
    <ul className="w-full flex items-center justify-center">
      {[...Array(2)].map((_, index) => (
        <li key={index} className="w-full">
          <CustomImage
            src={'/assets/images/background_bubble.png'}
            alt="인플루언서 가입 배너 배경 이미지"
            w="w-full"
            h="h-[21.25rem]"
            className="transform scale-x-[-1]"
          />
        </li>
      ))}
    </ul>
  )
}

export default BackgroundImageBox
