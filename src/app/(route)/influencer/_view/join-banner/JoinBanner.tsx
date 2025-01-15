import Image from 'next/image'
import JoinBox from './components/JoinBox'
import PhoneImageBox from './components/phone-image-box'

function JoinBanner() {
  return (
    <section className="relative h-[55vw] mobile:h-[45vw] primary:h-[21.25rem] w-full bg-primary-200 flex justify-center overflow-hidden">
      <Image
        src="/assets/images/background_bubble.png"
        alt="배경 이미지"
        fill
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative w-primary h-full flex justify-center items-center gap-2">
        <JoinBox />
        <PhoneImageBox />
      </div>
    </section>
  )
}
export default JoinBanner
