'use client'

import { useState } from 'react'
import { SectionLayout, TitleForm } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import Chevron from '@/public/assets/icons/chevron.svg'
import AgencyService from './components/AgencyService'

interface ourServicesData {
  src: string
  alt: string
  description: string
}

const ourservices: ourServicesData[] = [
  {
    src: '/assets/icons/our_service_calendar.svg',
    alt: '캘린더 아이콘',
    description: '날짜/재고 설정 가능',
  },
  {
    src: '/assets/icons/our_service_medal.svg',
    alt: '메달 아이콘',
    description: '콘텐츠 2차 활용 가능',
  },
  { src: '/assets/icons/our_service_search.svg', alt: '검색 아이콘', description: '콘텐츠 실시간 보고' },
  { src: '/assets/icons/our_service_doc.svg', alt: '문서 아이콘', description: '무제한 캠페인 세팅' },
  {
    src: '/assets/icons/our_service_computer.svg',
    alt: '컴퓨터 아이콘',
    description: '파트너 관리 페이지',
  },
  {
    src: '/assets/icons/our_service_humans.svg',
    alt: '사람 아이콘',
    description: '무제한 인플루언서 모집',
  },
]

function OurServices() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleAccordion = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <>
      <SectionLayout>
        <TitleForm title="와이리를 사용하신다면!" subtitle="OUR SERVICES" pb="primary:pb-[2.925rem] pb-[6.25vw]">
          <div className="flex flex-col primary:gap-[4.68rem] gap-[10.07vw]">
            <div className="primary:h-[23.433rem] mobile:h-[50.07vw]">
              <div className="mobile:relative w-full h-full">
                <div className="block mobile:hidden pb-[13.61vw]">
                  <section>
                    <div className="grid grid-cols-2 grids-rows-3 gap-y-[6.67vw]">
                      {ourservices.map((item, index) => (
                        <article key={index} className="flex flex-col items-center text-center">
                          <CustomImage src={item.src} alt={item.alt} w="w-[21.11vw]" h="h-[21.11vw]" />
                          <p className="font-pretendard">{item.description}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>
                <div className="mobile:absolute mobile:bottom-0 flex mobile:left-1/2 mobile:transform mobile:-translate-x-1/2 primary:w-[24.213rem] mobile:w-[51.74vw] w-[88.8vw] primary:h-[12.123rem] mobile:h-[25.9vw] h-[44.4vw] ">
                  <CustomImage
                    src="/assets/icons/our_service_eclipse.svg"
                    alt="와이리 원형 로고"
                    w="primary:w-[24.213rem] mobile:w-[51.74vw] w-[88.8vw]"
                    h="primary:h-[12.123rem] mobile:h-[25.9vw] h-[44.4vw]"
                  />
                </div>
                <div className="hidden mobile:block">
                  <div className="absolute left-[6%] bottom-[10%]">
                    <div className="flex flex-col items-center primary:gap-[0.52rem] gap-[1.11vw]">
                      <CustomImage
                        src="/assets/icons/our_service_computer.svg"
                        alt="컴퓨터 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw]tracking-[-0.005rem] text-gray-300 text-center">
                        편리한 파트너 <br />
                        전용 관리 페이지
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[15%] bottom-[43%]">
                    <div className="flex flex-col items-center primary:gap-[0.52rem] gap-[1.11vw]">
                      <CustomImage
                        src="/assets/icons/our_service_search.svg"
                        alt="검색 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] tracking-[-0.005rem] text-gray-300 text-center">
                        콘텐츠 실시간 보고
                        <br />및 초안 검수
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[10%] left-[32%]">
                    <div className="flex flex-col items-center primary:gap-[0.52rem] gap-[1.11vw]">
                      <CustomImage
                        src="/assets/icons/our_service_calendar.svg"
                        alt="캘린더 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] tracking-[-0.005rem] text-gray-300 text-center">
                        원하는 날짜 / 재고 설정
                        <br />
                        자유롭게 가능
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[10%] right-[32%]">
                    <div className="flex flex-col items-center primary:gap-[0.52rem] gap-[1.11vw]">
                      <CustomImage
                        src="/assets/icons/our_service_medal.svg"
                        alt="메달 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] tracking-[-0.005rem] text-gray-300 text-center">
                        콘텐츠 2차 활용
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-[43%] right-[15%]">
                    <div className="flex flex-col items-center primary:gap-[0.52rem] gap-[1.11vw]">
                      <CustomImage
                        src="/assets/icons/our_service_doc.svg"
                        alt="문서 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] tracking-[-0.005rem] text-gray-300 text-center">
                        횟수 제한 없는
                        <br />
                        캠페인 세팅
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[6%] bottom-[10%]">
                    <div className="flex flex-col items-center gap-[0.52rem]">
                      <CustomImage
                        src="/assets/icons/our_service_humans.svg"
                        alt="사람 아이콘"
                        w="primary:w-[3.218rem] w-[6.73vw]"
                        h="primary:h-[3.218rem] h-[6.73vw]"
                      />
                      <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] tracking-[-0.005rem] text-gray-300 text-center">
                        인플루언서 무제한
                        <br />
                        모집 및 선정
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col primary:gap-[1.3rem] gap-[2.78vw] items-center text-center">
              <h3 className="font-pretendard font-medium primary:text-[1.3rem] mobile:text-[2.78vw] text-[5.56vw] primary:leading-[1.95rem] mobile:leading-[4.17vw] leading-[7.50vw] tracking-[-0.005rem] text-gray-600">
                시간이 부족하신 분들을 위해
                <br />
                인플루언서 마케팅 전체 대행 서비스도 운영하고 있어요!
              </h3>
              <button
                onClick={toggleAccordion}
                className="flex items-center primary:gap-[0.26rem] mobile:gap-[0.56vw] gap-[1.39vw] active:bg-gray-100 transition-all duration-300 ease-out primary:px-[1.063rem] mobile:px-[2.4vw] px-[2.27vw] primary:py-[0.375rem] mobile:py-[0.8vw] py-[2.27vw]">
                <p className="font-pretendard font-normal primary:text-[0.91rem] mobile:text-[1.94vw] text-[3.33vw] primary:leading-[1.365rem] mobile:leading-[2.92vw] leading-[5vw] tracking-[-0.005rem] text-gray-600">
                  대행 서비스 보기
                </p>
                <Chevron
                  className="primary:w-[0.78rem] mobile:w-[1.67vw] w-[5vw] primary:h-[0.78rem] mobile:h-[1.67vw] h-[5vw]"
                  strokeWidth="1.5"
                  stroke="#222222"
                />
              </button>
            </div>
          </div>
        </TitleForm>
      </SectionLayout>
      {isVisible && <AgencyService />}
    </>
  )
}

export default OurServices
