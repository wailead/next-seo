import CustomImage from '@/components/custom-image/CustomImage'

function PhoneImageBox() {
  return (
    <div className="relative h-full w-[36%]">
      <div className="absolute bottom-0">
        <CustomImage
          src={'/assets/images/phone_wairi_splash_short.png'}
          alt="스마트폰 이미지"
          w="w-[37vw] primary:w-[18.2rem]"
          h="h-[36vw] primary:h-[17.5rem]"
        />
      </div>
    </div>
  )
}

export default PhoneImageBox
