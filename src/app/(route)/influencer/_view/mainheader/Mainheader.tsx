'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import AppStoreButtons from '../join-banner/components/app-store-buttons'
import QrCode from './components/qr-code'

const RenderStoreButtons = () => {
  return (
    <div>
      <div className="block mobile:hidden">
        <AppStoreButtons flexCol="flex-row" iconSize={30} />
      </div>
      <div className="hidden mobile:block">
        <QrCode />
      </div>
    </div>
  )
}

const YoutubePlayer = dynamic(() => import('@/components/youtube-player/YoutubePlayer'), {
  loading: () => (
    <div
      className={`primary:w-[14.688rem] mobile:w-[31.33vw] w-full mobile:h-auto h-[177.76vw] bg-black pointer-events-none`}
    />
  ),
  ssr: false,
})

function Mainheader() {
  return (
    <div className="flex w-full justify-center items-center relative">
      <Image
        src="/assets/images/background.png"
        alt="배경 이미지"
        fill
        quality={75}
        priority
        className="mobile:object-center object-cover bg-repeat-x"
      />
      <div className="flex mobile:flex-row flex-col w-primary h-full justify-between relative">
        <div className="flex flex-col primary:pt-[3.125rem] mobile:pt-[6.66vw] pt-[14.44vw] primary:pl-[3.219rem] mobile:pl-[6.86vw] primary:pb-[3.438rem] mobile:pb-[7.33vw] pb-[11.11vw]  primary:gap-[3.938rem] mobile:gap-[8.4vw] gap-[16.67vw] items-center mobile:items-start">
          <section>
            <div
              className={`flex flex-col primary:w-[19.656rem] mobile:w-[41.9333vw] primary:gap-[1.063rem] mobile:gap-[2.26vw] gap-[8.33vw] mobile:items-start items-center`}>
              <span
                className={`font-normal primary:text-[0.975rem] mobile:text-[2.08vw] text-[4.17vw] primary:leading-[1.188rem] leading-[2.53vw]  text-gray-600`}>
                인플루언서 마케팅 NO.1
              </span>
              <div className="flex flex-col mobile:items-start items-center  primary:gap-[0.531rem] mobile:gap-[1.13vw] gap-[7.78vw]">
                <span className="font-bold primary:text-[2.088rem] mobile:text-[4.45vw] text-[8.89vw] primary:leading-[2.375rem] leading-[5.06vw]  text-gray-600">
                  여행 인플루언서{' '}
                </span>
                <h1 className="font-bold primary:text-[2.088rem] mobile:text-[4.45vw] text-[8.89vw] primary:leading-[2.375rem] leading-[5.06vw] text-gray-600">
                  마케팅의 시작, 와이리{' '}
                </h1>
              </div>
            </div>
          </section>
          <RenderStoreButtons />
        </div>
        <div
          className={`primary:w-[14.688rem] mobile:w-[31.33vw] w-full mobile:h-auto h-[177.76vw]  bg-black pointer-events-none`}>
          <YoutubePlayer
            data="https://www.youtube.com/embed/8bBoGxyY48E?autoplay=1&mute=1&controls=0&loop=1&playlist=8bBoGxyY48E&rel=0&modestbranding=1&playsinline=1"
            className="relative w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
export default Mainheader
