'use client'
import { usePathname } from 'next/navigation'
import CustomImage from '../custom-image/CustomImage'
import LinkButton from '../button/button'

function PcHeader() {
  const pathname = usePathname()

  const isAdvertiserPage = pathname === '/advertiser'
  const isInfluencerPage = pathname === '/' || pathname === '/influencer'

  return (
    <header className="flex justify-between">
      <CustomImage src="/images/logo.png" alt="와이리(PC) 로고" w="w-[11.375rem]" h="h-[3.875rem]" />
      <div className="flex items-center gap-[22.88px]">
        {isInfluencerPage && (
          <p className="font-pretendard font-normal text-[12.48px] text-gray-300">수많은 캠페인에 신청해보세요.</p>
        )}
        {isAdvertiserPage && (
          <div className="flex gap-[24.96px]">
            <LinkButton name="서비스 소개" href="#" fontColor="primary" buttonColor="white-default" />
            <LinkButton name="진행 사례" href="#" fontColor="primary" buttonColor="white-default" />
            <LinkButton name="서비스 종류" href="#" fontColor="primary" buttonColor="white-default" />
            <LinkButton name="FAQ" href="#" fontColor="primary" buttonColor="white-default" />
          </div>
        )}
        <div className="flex gap-[8.32px]">
          {isInfluencerPage && (
            <>
              <LinkButton
                name="APP Store"
                href="https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852"
                fontColor="white"
                buttonColor="primary-default"
                icon={<CustomImage src="/icons/apple.svg" alt="애플스토어 로고" w="w-[1.5rem]" h="h-[1.5rem]" />}
              />
              <LinkButton
                name="Google Play"
                href="https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko"
                fontColor="primary"
                buttonColor="white-default"
                icon={<CustomImage src="/icons/google_play.svg" alt="구글플레이 로고" w="w-[1.5rem]" h="h-[1.5rem]" />}
                border
              />
              <LinkButton name="광고주라면?" href="/advertiser" fontColor="primary" buttonColor="primary-200" />
            </>
          )}
          {isAdvertiserPage && (
            <>
              <LinkButton name="제안서 받기" href="#" fontColor="white" buttonColor="primary-default" />
              <LinkButton name="인플루언서라면?" href="/influencer" fontColor="primary" buttonColor="primary-200" />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default PcHeader
