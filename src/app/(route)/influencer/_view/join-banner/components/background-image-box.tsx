import Image from 'next/image'

function BackgroundImageBox() {
  // bg-[url('/images/web/influencer/background.png')]  bg-contain bg-center
  return (
    <ul className="w-full flex items-center justify-center">
      {[...Array(2)].map((_, index) => (
        <li key={index} className="w-[50%] h-[340px] relative">
          <Image
            src={'/images/web/influencer/background.png'}
            alt="인플루언서 가입 배너 배경 이미지"
            fill
            className="transform scale-x-[-1]"
          />
        </li>
      ))}
    </ul>
  )
}

export default BackgroundImageBox
