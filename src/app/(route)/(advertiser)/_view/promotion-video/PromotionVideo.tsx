import { SectionLayout } from '@/components'
import Link from 'next/link'

function PromotionVideo() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-2 bg-white-100 ">
        <object
          data="https://www.youtube.com/embed/ipYckn3E_lY?autoplay=1&loop=1&controls=0&mute=1&playlist=ipYckn3E_lY"
          width={750}
          height={422}
          className="border-[1px] border-gray-100"></object>
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-black" />
          <Link
            href={'https://www.youtube.com/watch?v=ipYckn3E_lY'}
            className="hover:bg-gray-100 w-full flex items-center justify-center text-black"
            target="_blank">
            {/* <Icon name="channel_icon_2" /> */}
            소개 영상 다시 보기
          </Link>
        </div>
      </div>
    </SectionLayout>
  )
}

export default PromotionVideo
