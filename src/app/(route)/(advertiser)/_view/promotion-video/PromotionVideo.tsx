'use client'
import { SectionLayout } from '@/components'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const YoutubePlayer = dynamic(() => import('@/components/youtube-player/YoutubePlayer'), {
  loading: () => <div className="relative w-full bg-white-default" />,
  ssr: false,
})

function PromotionVideo() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-2 bg-white-default w-full">
        <div className="relative w-full border-[1px] border-gray-100" style={{ paddingBottom: '56.3%' }}>
          <YoutubePlayer
            data="https://www.youtube.com/embed/ipYckn3E_lY?autoplay=1&loop=1&controls=0&mute=1&playlist=ipYckn3E_lY"
            className="absolute top-0 left-0 w-full h-full "
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-black" />
          <Link
            href={'https://www.youtube.com/watch?v=ipYckn3E_lY'}
            className="hover:bg-white-200 w-full flex items-center justify-center text-black gap-2"
            target="_blank">
            <Image
              src={'/assets/icons/channel_icon_2.svg'}
              alt="채널 아이콘"
              width={24}
              height={24}
              loading="lazy"
              quality={75}
            />
            <span className="text-sm text-gray-300">소개 영상 다시 보기</span>
          </Link>
        </div>
      </div>
    </SectionLayout>
  )
}

export default PromotionVideo
