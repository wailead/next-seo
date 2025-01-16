import LinkButton from '@/components/button/LinkButton'
import Image from 'next/image'

type Flex = {
  flexCol: string
  width?: string
  py?: string
  iconSize?: number
  textSize?: string
}

function AppStoreButtons({ flexCol, width = 'mobile:w-fit w-[39vw]', py, iconSize = 24, textSize }: Flex) {
  const appStores = [
    {
      name: 'APP Store',
      href: 'https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852',
      icon: '/assets/icons/apple.svg',
    },
    {
      name: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko',
      icon: '/assets/icons/google.svg',
    },
  ]
  return (
    <ul className={`flex ${flexCol} mobile:flex-row gap-[8px]`}>
      {appStores.map((item, index) => {
        return (
          <li key={index}>
            <LinkButton
              name={item.name}
              href={item.href}
              icon={<Image src={item.icon} alt={'store icon'} width={iconSize} height={iconSize} quality={75} />}
              fontColor="white"
              buttonColor="primary-default"
              width={width}
              py={py}
              textSize={textSize}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default AppStoreButtons
