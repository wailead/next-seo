import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

function JoinBanner() {
  const appStores = [
    {
      name: 'App Store',
      href: 'https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852',
      icon: '/icons/apple.svg',
    },
    {
      name: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko',
      icon: '/icons/google.svg',
    },
  ]
  return (
    <section className="h-[340px] bg-primary-200 relative">
      <div className="w-full flex items-center justify-center">
        {[...Array(2)].map((_, index) => (
          <li key={index} className="w-[50%] h-[340px] relative">
            <Image src={'/assets/images/background_bubble.png'} alt="인플루언서 가입 배너 배경 이미지" fill />
          </li>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center">
        <div className="w-primary h-full flex justify-center items-center gap-2">
          <div className="h-fu flex flex-col justify-center items-center gap-[20px]">
            <h1 className="text-gray-600 font-bold text-[26px] inline-block">와이리 가입하기</h1>
            <ul className="flex gap-[8px]">
              {appStores.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className={twMerge(
                        `bg-primary-default text-gray-50 w-[130px] h-[44px] flex items-center justify-center font-semibold text-[14px] rounded-3xl gap-1`,
                        'hover:bg-primary-default/90 hover:shadow-sm hover:shadow-gray-200 transition duration-300'
                      )}>
                      <Image src={item.icon} alt={'store icon'} width={24} height={24} />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="relative h-full w-[280px]">
            <Image
              src={'/assets/images/phone_wairi_splash_short.png'}
              alt="스마트폰 이미지"
              width={320}
              height={400}
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default JoinBanner
