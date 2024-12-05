import Image from 'next/image'

function PhoneImageBox() {
  return (
    <div className="relative h-full w-[320px]">
      <Image
        src={'/assets/images/phone_wairi_splash_short.png'}
        alt="스마트폰 이미지"
        width={320}
        height={400}
        className="absolute bottom-0"
      />
    </div>
  )
}

export default PhoneImageBox
