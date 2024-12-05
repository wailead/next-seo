import CustomImage from '@/components/custom-image/CustomImage'

function PhoneImageBox() {
  return (
    <div className="relative h-full w-[320px]">
      <div className="absolute bottom-0">
        <CustomImage
          src={'/assets/images/phone_wairi_splash_short.png'}
          alt="스마트폰 이미지"
          w="w-[18.2rem]"
          h="h-[17.5rem]"
        />
      </div>
    </div>
  )
}

export default PhoneImageBox
