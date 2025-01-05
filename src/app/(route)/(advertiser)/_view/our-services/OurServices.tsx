'use client'

import { useState } from 'react'
import { SectionLayout, TitleForm } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import Chevron from '@/public/assets/icons/chevron.svg'
import AgencyService from './components/AgencyService'

function OurServices() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleAccordion = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <>
      <SectionLayout>
        <TitleForm title="OUR SERVICES" subtitle="와이리를 사용하신다면!" pb="primary:pb-[2.925rem] pb-[6.25vw]">
          <div className="flex flex-col primary:gap-[4.68rem] gap-[10.07vw]">
            <div className="primary:h-[23.433rem] h-[50.07vw]">
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 flex left-1/2 transform -translate-x-1/2 primary:w-[24.213rem] w-[51.74vw] primary:h-[12.123rem] h-[25.9vw]">
                  <CustomImage
                    src="/assets/icons/our_service_ellipse.svg"
                    alt="와이리 원형 로고"
                    w="primary:w-[24.213rem] w-[51.74vw]"
                    h="primary:h-[12.123rem] h-[25.9vw]"
                  />
                </div>
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
            <div className="flex flex-col primary:gap-[1.3rem] gap-[2.78vw] items-center text-center">
              <h4 className="font-pretendard font-medium primary:text-[1.3rem] text-[2.78vw] primary:leading-[1.95rem] leading-[4.17vw] tracking-[-0.005rem] text-gray-600">
                시간이 부족하신 분들을 위해
                <br /> 인플루언서 마케팅 전체 대행 서비스도 운영하고 있어요!
              </h4>
              <button
                onClick={toggleAccordion}
                className="flex items-center primary:gap-[0.26rem] gap-[0.56vw] active:bg-gray-100 transition-all duration-300 ease-out primary:px-[1.063rem] px-[2.4vw] primary:py-[0.375rem] py-[0.8vw]">
                <p className="font-pretendard font-normal primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw] tracking-[-0.005rem] text-gray-600">
                  대행 서비스 보기
                </p>
                <Chevron
                  className="primary:w-[0.78rem] w-[1.67vw] primary:h-[0.78rem] h-[1.67vw]"
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
