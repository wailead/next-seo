import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

function AppStoreButtons() {
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
  )
}

export default AppStoreButtons
