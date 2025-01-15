'use client'

import CloseIcon from '@/public/assets/icons/close.svg'
import ListIcon from '@/public/assets/icons/list.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LinkButton from '../button/LinkButton'
import CustomImage from '../custom-image/CustomImage'
import SectionLayout from '../section-layout/SectionLayout'

function Header() {
  const pathname = usePathname()

  const isAdvertiserPage = pathname === '/' || pathname === '/advertiser'
  const isInfluencerPage = pathname === '/influencer'
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const debounce = <T extends (...args: unknown[]) => void>(func: T, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMenuOpen(false)
      }
    }

    const debouncedHandleResize = debounce(handleResize, 300)

    window.addEventListener('resize', debouncedHandleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <SectionLayout>
      <header className="w-screen flex justify-between px-[0.65rem] primary:py-[0.65rem] mobile:py-[1.39vw] py-[3.20vw] bg-white-default h-[3.315rem] fixed top-0 left-0 right-0 z-30 items-center border-b-[1px]">
        <div className="hidden mobile:block">
          <CustomImage
            src="/assets/icons/wairi_logo.svg"
            alt="와이리(PC) 로고"
            w="primary:w-[5rem] w-[10.7vw]"
            h="primary:h-[2.2rem] h-[4.69vw]"
          />
        </div>
        <div className="block mobile:hidden">
          <CustomImage
            src="/assets/icons/wairi_logo_mobile.svg"
            alt="와이리(Mobile) 로고"
            w="w-[6.67vw]"
            h="h-[6.67vw]"
          />
        </div>
        <nav className="flex items-center primary:gap-[1.43rem] gap-[3.06vw]">
          <div className="hidden mobile:block">
            {isInfluencerPage && (
              <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] leading-[1.17rem] text-gray-300">
                수많은 캠페인에 신청해보세요.
              </p>
            )}
          </div>
          {isAdvertiserPage && (
            <ul className="mobile:flex justify-between items-center hidden">
              <li>
                <Link
                  className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:py-[0.65rem] py-[1.39vw] primary:px-[1.063rem] px-[2.4vw] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                  href="#serviceIntroduction">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link
                  className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:py-[0.65rem] py-[1.39vw] primary:px-[1.063rem] px-[2.4vw] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                  href="#reference">
                  진행사례
                </Link>
              </li>
              <li>
                <Link
                  className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:py-[0.65rem] py-[1.39vw] primary:px-[1.063rem] px-[2.4vw] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                  href="#moreService">
                  서비스 종류
                </Link>
              </li>
              <li>
                <Link
                  className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] text-gray-300 primary:py-[0.65rem] py-[1.39vw] primary:px-[1.063rem] px-[2.4vw] flex text-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                  href="#question">
                  FAQ
                </Link>
              </li>
            </ul>
          )}
          <div className="flex gap-[0.425rem] items-center">
            {isInfluencerPage && (
              <>
                <LinkButton
                  name="APP Store"
                  href="https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852"
                  fontColor="white"
                  buttonColor="primary-default"
                  icon={
                    <CustomImage
                      src="/assets/icons/apple.svg"
                      alt="애플스토어 로고"
                      w="primary:w-[0.78rem] mobile:w-[1.67vw] w-[4.53vw]"
                      h="primary:h-[0.78rem] mobile:h-[1.67vw] h-[4.53vw]"
                    />
                  }
                  target="_blank"
                  textSize="primary:text-[0.65rem] mobile:text-[1.39vw] leading-[0.975rem] hidden mobile:block"
                  px="primary:px-[1.04rem] mobile:px-[2.22vw] px-[3.2vw]"
                  py="primary:py-[0.39rem] mobile:py-[0.83vw] py-[2.8vw]"
                />
                <LinkButton
                  name="Google Play"
                  href="https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko"
                  fontColor="primary"
                  buttonColor="white-default"
                  icon={
                    <CustomImage
                      src="/assets/icons/google_play.svg"
                      alt="구글플레이 로고"
                      w="primary:w-[0.78rem] mobile:w-[1.67vw] w-[4.53vw]"
                      h="primary:h-[0.78rem] mobile:h-[1.67vw] h-[4.53vw]"
                    />
                  }
                  target="_blank"
                  border
                  textSize="primary:text-[0.65rem] text-[1.39vw] leading-[0.975rem] hidden mobile:block"
                  px="primary:px-[1.04rem] mobile:px-[2.22vw] px-[3.2vw]"
                  py="primary:py-[0.39rem] mobile:py-[0.83vw] py-[2.8vw]"
                />
                <LinkButton
                  name="광고주라면?"
                  href="/"
                  fontColor="primary"
                  buttonColor="primary-200"
                  textSize="primary:text-[0.65rem] mobile:text-[1.39vw] text-[2.8vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] mobile:px-[2.22vw] px-[3.2vw]"
                  py="primary:py-[0.39rem] mobile:py-[0.83vw] py-[2.8vw]"
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
                  textSize="primary:text-[0.65rem] mobile:text-[1.39vw] text-[2.8vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] mobile:px-[2.22vw] px-[3.2vw]"
                  py="primary:py-[0.39rem] mobile:py-[0.83vw] py-[2.8vw]"
                />
                <LinkButton
                  name="인플루언서라면?"
                  href="/influencer"
                  fontColor="primary"
                  buttonColor="primary-200"
                  textSize="primary:text-[0.65rem] mobile:text-[1.39vw] text-[2.8vw] leading-[0.975rem]"
                  px="primary:px-[1.04rem] mobile:px-[2.22vw] px-[3.2vw]"
                  py="primary:py-[0.39rem] mobile:py-[0.83vw] py-[2.8vw]"
                />
                <button className="block mobile:hidden" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <CloseIcon className="w-[6.67vw] h-[6.67vw]" loading="lazy" quality={75} />
                  ) : (
                    <ListIcon className="w-[6.67vw] h-[6.67vw]" loading="lazy" quality={75} />
                  )}
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      {isAdvertiserPage && isMenuOpen && (
        <nav className="fixed top-[3.315rem] left-0 flex flex-col items-center w-full shadow-gray-100 shadow-md z-10 bg-white-default">
          <ul>
            <li>
              <Link
                className="font-pretendard font-normal text-[3.89vw] leading-[4.80vw] text-gray-300 w-[24.24vw] p-[2.4vw] flex justify-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#serviceIntroduction">
                서비스 소개
              </Link>
            </li>
            <li>
              <Link
                className="font-pretendard font-normal text-[3.89vw] text-gray-300 w-[24.24vw] p-[2.4vw] flex justify-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#reference">
                진행사례
              </Link>
            </li>
            <li>
              <Link
                className="font-pretendard font-normal text-[3.89vw] leading-[4.80vw] text-gray-300 w-[24.24vw] p-[2.4vw] flex justify-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#moreService">
                서비스 종류
              </Link>
            </li>
            <li>
              <Link
                className="font-pretendard font-normal text-[3.89vw] leading-[4.80vw] text-gray-300 w-[24.24vw] p-[2.4vw] flex justify-center items-center hover:bg-[#f6fbff] active:bg-[#cce7fd] transition-all duration-300 ease-out"
                href="#question">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </SectionLayout>
  )
}

export default Header
