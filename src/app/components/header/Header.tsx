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
      <header className="w-screen flex justify-between px-[0.65rem] bg-white-default h-[3.315rem] fixed top-0 left-0 right-0 z-30 items-center border-b-[1px]">
        <CustomImage
          src="/images/logo.png"
          alt="와이리(PC) 로고"
          w="primary:w-[5rem] w-[10.7vw]"
          h="primary:h-[2.2rem] h-[4.69vw]"
        />
        <div className="flex items-center primary:gap-[1.43rem] gap-[3.06vw]">
          {isInfluencerPage && (
            <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] leading-[1.17rem] text-gray-300">
              수많은 캠페인에 신청해보세요.
            </p>
          )}
          {isAdvertiserPage && (
            <div className="flex justify-between items-center">
              <Link
                className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:px-[1.063rem] px-[2.4vw] h-[3.2rem] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#serviceIntroduction">
                서비스 소개
              </Link>
              <Link
                className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:px-[1.063rem] px-[2.4vw] h-[3.2rem] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#reference">
                진행사례
              </Link>
              <Link
                className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:px-[1.063rem] px-[2.4vw] h-[3.2rem] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#moreService">
                서비스 종류
              </Link>
              <Link
                className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:px-[1.063rem] px-[2.4vw] h-[3.2rem] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#question">
                FAQ
              </Link>
            </div>
          )}
          <div className="flex gap-[0.425rem]">
            {isInfluencerPage && (
              <>
                <LinkButton
                  name="APP Store"
                  href="https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852"
                  fontColor="white"
                  buttonColor="primary-default"
                  icon={<CustomImage src="/icons/apple.svg" alt="애플스토어 로고" w="w-[0.78rem]" h="h-[0.78rem]" />}
                  target="_blank"
                  textSize="primary:text-[0.65rem] text-[1.39vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] px-[2.22vw]"
                  py="primary:py-[0.39rem] py-[0.83vw]"
                />
                <LinkButton
                  name="Google Play"
                  href="https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko"
                  fontColor="primary"
                  buttonColor="white-default"
                  icon={
                    <CustomImage src="/icons/google_play.svg" alt="구글플레이 로고" w="w-[0.78rem]" h="h-[0.78rem]" />
                  }
                  target="_blank"
                  border
                  textSize="primary:text-[0.65rem] text-[1.39vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] px-[2.22vw]"
                  py="primary:py-[0.39rem] py-[0.83vw]"
                />
                <LinkButton
                  name="광고주라면?"
                  href="/"
                  fontColor="primary"
                  buttonColor="primary-200"
                  textSize="primary:text-[0.65rem] text-[1.39vw]  leading-[0.975rem]"
                  px="primary:px-[1.04rem] px-[2.22vw]"
                  py="primary:py-[0.39rem] py-[0.83vw]"
                />
              </>
            )}
            {isAdvertiserPage && (
              <>
                <LinkButton
                  name="제안서 받기"
                  href="#inquiry"
                  fontColor="white"
                  buttonColor="primary-default"
                  textSize="primary:text-[0.65rem] text-[1.39vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] px-[2.22vw]"
                  py="primary:py-[0.39rem] py-[0.83vw]"
                />
                <LinkButton
                  name="인플루언서라면?"
                  href="/influencer"
                  fontColor="primary"
                  buttonColor="primary-200"
                  textSize="primary:text-[0.65rem] text-[1.39vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] px-[2.22vw]"
                  py="primary:py-[0.39rem] py-[0.83vw]"
                />
              </>
            )}
          </div>
        </div>
      </header>
    </SectionLayout>
  )
}

export default PcHeader
