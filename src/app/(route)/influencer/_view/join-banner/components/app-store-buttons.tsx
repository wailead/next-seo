import Image from 'next/image'
import LinkButton from '@/components/button/LinkButton'

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
            <LinkButton
              name={item.name}
              href={item.href}
              icon={<Image src={item.icon} alt={'store icon'} width={24} height={24} />}
              fontColor="white"
              buttonColor="primary-default"
              width="mobile:w-fit w-[41.67vw]"
              height="mobile:h-fit h-[8.89vw]"
            />
          </li>
        )
      })}
    </ul>
  )
}

export default AppStoreButtons
