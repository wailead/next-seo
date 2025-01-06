'use client'

import { useEffect, useState } from 'react'
import AppStoreButtons from '../join-banner/components/app-store-buttons'
import QrCode from './components/qr-code'

function Mainheader() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth)
        setIsLoaded(true)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <div className="flex w-full  justify-center items-center bg-[url('/images/influencer/background.png')]  mobile:bg-contain bg-cover bg-center ">
      <div className="flex mobile:flex-row flex-col w-primary h-full justify-between ">
        <div className="flex flex-col primary:pt-[3.125rem] mobile:pt-[6.66vw] pt-[14.44vw] primary:pl-[3.219rem] mobile:pl-[6.86vw] primary:pb-[3.438rem] mobile:pb-[7.33vw] pb-[11.11vw]  primary:gap-[3.938rem] mobile:gap-[8.4vw] gap-[16.67vw] items-center mobile:items-start">
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
              <span className="font-bold primary:text-[2.088rem] mobile:text-[4.45vw] text-[8.89vw] primary:leading-[2.375rem] leading-[5.06vw] text-gray-600">
                마케팅의 시작, 와이리{' '}
              </span>
            </div>
          </div>
          {isLoaded ? (
            screenWidth! < 500 ? (
              <AppStoreButtons flexCol="flex-row" iconSize={30} />
            ) : (
              <QrCode />
            )
          ) : (
            <div className="primary:h-[8.125rem] mobile:h-[17.33vw] h-[8.89vw]"></div>
          )}
        </div>
        {/** 유튜브 자리 확인을 하기 위해 색상을 넣었습니다. */}
        <div
          className={`primary:w-[14.688rem] mobile:w-[31.33vw] w-full mobile:h-auto h-[177.76vw]  bg-black pointer-events-none`}>
          <object
            type="text/html"
            data="https://youtube.com/embed/8bBoGxyY48E?autoplay=1&mute=1&controls=0&loop=1&playlist=8bBoGxyY48E"
            className="relative w-full h-full"></object>
        </div>
      </div>
    </div>
  )
}
export default Mainheader
