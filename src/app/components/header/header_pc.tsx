'use client'

import Image from 'next/image'
import Button from '../button/button'
import { usePathname, useRouter } from 'next/navigation'
import { styleRatio } from '@/utils/styleRatio'

function PcHeader() {
  const pathname = usePathname()
  const router = useRouter();

  const isAdvertiserPage = pathname === '/advertiser'
  const isInfluencerPage = pathname === '/' || pathname === '/influencer'

  return (
    <header className="flex justify-between">
      <Image src="/images/logo.png" alt="와이리(PC) 로고" width={styleRatio(182)} height={styleRatio(62)} />
      <div className="flex items-center gap-[22.88px]">
        {isInfluencerPage && <p className="font-pretendard font-normal text-[12.48px] text-gray-300">수많은 캠페인에 신청해보세요.</p>}
        {isAdvertiserPage && (
          <div className="flex gap-[24.96px]">
            <Button className="text-gray-300 font-normal text-[12.48px] px-[16.64px] py-[6.24px] hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-100 ease-out">서비스 소개</Button>
            <Button className="text-gray-300 font-normal text-[12.48px] px-[16.64px] py-[6.24px] hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-100 ease-out ">진행 사례</Button>
            <Button className="text-gray-300 font-normal text-[12.48px] px-[16.64px] py-[6.24px] hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-100 ease-out">서비스 종류</Button>
            <Button className="text-gray-300 font-normal text-[12.48px] px-[16.64px] py-[6.24px] hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-100 ease-out">FAQ</Button>
          </div>
        )}
        <div className="flex gap-[8.32px]">
          {isInfluencerPage && (
            <>
              <Button className="bg-primary-default px-[16.64px] py-[6.24px] rounded-[29.12px] flex items-center justify-center gap-[2.08px] hover:bg-[#3ecccc] hover:shadow-md active:bg-[#8fe1e1] transition-all duration-100 ease-out" onClick={() => window.open("https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852")}>
                <Image src="/images/apple.svg" alt="애플스토어 로고" width={styleRatio(24)} height={styleRatio(24)} />
                <p className="font-pretendard font-normal text-white-default text-[10.4px] ">APP Store</p>
              </Button>
              <Button className="bg-white-default border-primary-default border-2 px-[16.64px] py-[6.24px] rounded-[29.12px] flex items-center justify-center gap-[2.08px] hover:shadow-md" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko")}>
                <Image src="/images/google_play.svg" alt="구글플레이 로고" width={styleRatio(24)} height={styleRatio(24)} />
                <p className="font-pretendard font-normal text-primary-default text-[10.4px]">Google Play</p>
              </Button>
              <Button className="bg-primary-100 px-[16.64px] py-[6.24px] rounded-[29.12px] hover:bg-[#E6FBFB] hover:shadow-md" onClick={() => router.push("/advertiser")}>
                <p className="font-pretendard font-normal text-primary-default text-[10.4px]" >광고주라면?</p>
              </Button>
            </>
          )}
          {isAdvertiserPage && (
            <>
              <Button className="bg-primary-default px-[16.64px] py-[6.24px] rounded-[29.12px] flex items-center justify-center gap-[2.08px] hover:bg-[#3ecccc] hover:shadow-md active:bg-[#8fe1e1] transition-all duration-100 ease-out">
                <p className="font-pretendard font-normal text-white-default text-[10.4px] ">제안서 받기</p>
              </Button>
              <Button className="bg-primary-100 px-[16.64px] py-[6.24px] rounded-[29.12px] hover:bg-[#E6FBFB] hover:shadow-md" onClick={() => router.push("/influencer")}>
                <p className="font-pretendard font-normal text-primary-default text-[10.4px]" >인플루언서라면?</p>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default PcHeader
