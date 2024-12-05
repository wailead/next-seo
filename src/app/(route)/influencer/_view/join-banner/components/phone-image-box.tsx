import CustomImage from '@/components/custom-image/CustomImage'

function PhoneImageBox() {
  return (
    <div className="relative h-full w-[320px]">
      <CustomImage
        src={'/assets/images/phone_wairi_splash_short.png'}
        alt="스마트폰 이미지"
        w="w-[20rem]"
        h="h-[25rem]"
        className="absolute bottom-0"
      />
    </div>
  )
}

export default PhoneImageBox
