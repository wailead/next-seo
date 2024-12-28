'use client'

import { usePathname } from 'next/navigation'
import CustomImage from '../custom-image/CustomImage'
import LinkButton from '../button/LinkButton'
import Link from 'next/link'
import SectionLayout from '../section-layout/SectionLayout'

function PcHeader() {
  const pathname = usePathname()

  const isAdvertiserPage = pathname === '/' || pathname === '/advertiser'
  const isInfluencerPage = pathname === '/influencer'

  return (
    <SectionLayout>
      <header className="flex justify-between px-[2.77vw] bg-white-default py-[1.39vw] h-[3.315rem] fixed top-0 left-0 right-0 mx-auto z-40">
        <CustomImage src="/images/logo.png" alt="와이리(PC) 로고" w="w-[5rem]" h="h-[2.2rem]" />
        <div className="flex items-center gap-[3.05vw]">
          {isInfluencerPage && (
            <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] text-gray-300">
              수많은 캠페인에 신청해보세요.
            </p>
          )}
          {isAdvertiserPage && (
            <div className="flex gap-[3.33vw]">
              {isAdvertiserPage && (
                <div className="flex justify-between">
                  <Link
                    className="font-pretendard font-normal text-[0.78rem] text-gray-300 px-[2.22vw] py-[0.83vw] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                    href="#serviceIntroduction">
                    서비스 소개
                  </Link>
                  <Link
                    className="font-pretendard font-normal text-[0.78rem] text-gray-300 px-[2.22vw] py-[0.83vw] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                    href="#reference">
                    진행사례
                  </Link>
                  <Link
                    className="font-pretendard font-normal text-[0.78rem] text-gray-300 px-[2.22vw] py-[0.83vw] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                    href="#moreService">
                    서비스 종류
                  </Link>
                  <Link
                    className="font-pretendard font-normal text-[0.78rem] text-gray-300 px-[2.22vw] py-[0.83vw] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                    href="#question">
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          )}
          <div className="flex gap-[1.11vw]">
            {isInfluencerPage && (
              <>
                <LinkButton
                  name="APP Store"
                  href="https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852"
                  fontColor="white"
                  buttonColor="primary-default"
                  icon={<CustomImage src="/icons/apple.svg" alt="애플스토어 로고" w="w-[1rem]" h="h-[1rem]" />}
                  target="_blank"
                />
                <LinkButton
                  name="Google Play"
                  href="https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko"
                  fontColor="primary"
                  buttonColor="white-default"
                  icon={<CustomImage src="/icons/google_play.svg" alt="구글플레이 로고" w="w-[1rem]" h="h-[1rem]" />}
                  target="_blank"
                  border
                />
                <LinkButton name="광고주라면?" href="/" fontColor="primary" buttonColor="primary-200" />
              </>
            )}
            {isAdvertiserPage && (
              <>
                <LinkButton name="제안서 받기" href="#inquiry" fontColor="white" buttonColor="primary-default" />
                <LinkButton name="인플루언서라면?" href="/influencer" fontColor="primary" buttonColor="primary-200" />
              </>
            )}
          </div>
        </div>
      </header>
    </SectionLayout>
  )
}

export default PcHeader
