import { SectionLayout, TitleForm } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import Chevron from '@/public/assets/icons/chevron.svg'

function OurServices() {
  return (
    <SectionLayout>
      <TitleForm title="OUR SERVICES" subtitle="와이리를 사용하신다면!">
        <div className="flex flex-col gap-[4.68rem]">
          <div className="h-[19.8rem]">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 flex left-1/2 transform -translate-x-1/2 w-[24.213rem] h-[12.123rem]">
                <CustomImage
                  src="/assets/icons/our_service_ellipse.svg"
                  alt="와이리 원형 로고"
                  w="w-[24.213rem]"
                  h="h-[12.123rem]"
                />
              </div>
              <div className="absolute left-[1.9rem] bottom-[1.9rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_computer.svg"
                    alt="컴퓨터 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    편리한 파트너 <br />
                    전용 관리 페이지
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[9.2rem] left-[5.6rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_search.svg"
                    alt="검색 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    콘텐츠 실시간 보고
                    <br />및 초안 검수
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[14.3rem] left-[13rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_calendar.svg"
                    alt="캘린더 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    원하는 날짜 / 재고 설정
                    <br />
                    자유롭게 가능
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[15.4rem] right-[13rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_medal.svg"
                    alt="메달 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    콘텐츠 2차 활용
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[9.2rem] right-[5.6rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_doc.svg"
                    alt="문서 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    횟수 제한 없는
                    <br />
                    캠페인 세팅
                  </p>
                </div>
              </div>
              <div className="absolute right-[1.9rem] bottom-[1.9rem]">
                <div className="flex flex-col items-center gap-[0.52rem]">
                  <CustomImage
                    src="/assets/icons/our_service_humans.svg"
                    alt="사람 아이콘"
                    w="w-[3.218rem]"
                    h="h-[3.218rem]"
                  />
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] tracking-[0.005rem] text-gray-300 text-center">
                    인플루언서 무제한
                    <br />
                    모집 및 선정
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.3rem] items-center text-center">
            <h4 className="font-pretendard font-medium text-[1.3rem] leading-[1.95rem] tracking-[0.005rem] text-gray-600">
              시간이 부족하신 분들을 위해
              <br /> 인플루언서 마케팅 전체 대행 서비스도 운영하고 있어요!
            </h4>
            <button className="flex items-center gap-[0.26rem] active:bg-gray-100 transition-all duration-300 ease-out px-[1.063rem] py-[0.375rem]">
              <p className="font-pretendard font-normal text-[0.91rem] leading-[1.365rem] tracking-[0.005rem] text-gray-600">
                대행 서비스 보기
              </p>
              <Chevron width="0.78rem" height="0.78rem" strokeWidth="1.5" stroke="#222222" />
            </button>
          </div>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}

export default OurServices
