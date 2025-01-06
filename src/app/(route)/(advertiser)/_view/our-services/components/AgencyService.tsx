import { SectionLayout } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'
import Link from 'next/link'

interface AgencyServiceData {
  serviceName: string
  planCheck: string[]
}

const services: AgencyServiceData[] = [
  {
    serviceName: '신규 캠페인 생성',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '신규 상품(객실) 등록',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '캠페인 및 상품 수정/관리',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '재고 등록',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '재고 관리',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '포스팅 검수',
    planCheck: ['true', 'true'],
  },
  {
    serviceName: '인플루언서 선정',
    planCheck: ['false', 'true'],
  },
  {
    serviceName: '배포된 콘텐츠 내<br/>사용된 사진 원본 전달',
    planCheck: ['false', 'true'],
  },
  {
    serviceName: '캠페인 앱 내 상단 노출을 통한 인플루언서 모집 효과 증가',
    planCheck: ['false', 'true'],
  },
]

function AgencyService() {
  return (
    <div className="bg-gray-600">
      <SectionLayout>
        <div className="p-[3.3rem] tracking-[-0.005rem]">
          <div className="flex flex-col gap-[0.78rem] text-center">
            <h4 className="font-pretendard font-bold primary:text-[1.17rem] text-[2.5vw] primary:leading-[1.82rem] leading-[4.17vw] text-white-default">
              투자 가능한 시간에 따라 가격 플랜을 선택하고 <br /> 마케팅 결과만 받아보세요
            </h4>
            <p className="font-pretendard font-normal primary:text-[1.04rem] text-[2.22vw] primary:leading-[1.56rem] leading-[3.33vw] text-gray-100">
              대부분 내용은 시스템상에서 직접 무료로 진행이 가능하오나,
              <br />
              체크 표시된 부분은 와이리에서 대행을 진행해드립니다
            </p>
          </div>
          <div className="flex primary:gap-[3.9rem] gap-[8.33vw] justify-end primary:pr-[0.78rem] pr-[1.67vw]">
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="primary:w-[6.24rem] w-[13.33vw] rounded-[0.65rem] border-[1.5px] primary:py-[0.52rem] py-[1.11vw] font-pretendard text-center border-[#B1E7E8]">
                <p className="font-semibold primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw] text-white-default">
                  무료
                </p>
                <p className="font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] text-[#B1E7E8]">
                  직접진행
                </p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.325rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="primary:w-[6.24rem] w-[13.33vw] rounded-[0.65rem] primary:py-[0.52rem] py-[1.11vw] font-pretendard text-center bg-[#B1E7E8] text-gray-300">
                <p className="font-semibold primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw]">
                  기본 멤버십
                </p>
                <p className="font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw]">
                  월 39,000원
                </p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.325rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="primary:w-[6.24rem] w-[13.33vw] rounded-[0.65rem] primary:py-[0.52rem] py-[1.11vw] font-pretendard text-center bg-[#B1E7E8] text-gray-300">
                <p className="font-semibold primary:text-[0.91rem] text-[1.94vw] primary:leading-[1.365rem] leading-[2.92vw]">
                  플러스 멤버십
                </p>
                <p className="font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw]">
                  월 49,000원
                </p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.325rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
          </div>
          <div className="pt-[2rem] flex flex-col gap-[0.618rem]">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col primary:gap-[0.65rem] gap-[1.32vw]">
                <div className="flex primary:gap-[0.65rem] gap-[1.67vw] primary:px-[0.78rem] px-[1.67vw]">
                  <p className="font-pretendard font-normal primary:text-[0.78rem] text-[1.67vw] primary:leading-[1.17rem] leading-[2.50vw] text-white-default primary:w-[12.5rem] w-[26.71vw]">
                    <span dangerouslySetInnerHTML={{ __html: service.serviceName }} />
                  </p>
                  <div className="flex w-full justify-end primary:gap-[3.9rem] gap-[8.33vw]">
                    <div className="primary:w-[6.24rem] w-[13.33vw] flex items-center justify-center">
                      <CustomImage
                        src={`/assets/icons/plan_false.svg`}
                        alt="plan false 아이콘"
                        w="primary:w-[1.365rem] w-[2.92vw]"
                        h="primary:h-[1.365rem] h-[2.92vw]"
                      />
                    </div>
                    {service.planCheck.map((check, i) => (
                      <div key={i} className="primary:w-[6.24rem] w-[13.33vw] flex items-center justify-center">
                        <CustomImage
                          src={`/assets/icons/plan_${check}.svg`}
                          alt={`plan ${check} 아이콘`}
                          w="primary:w-[1.365rem] w-[2.92vw]"
                          h="primary:h-[1.365rem] h-[2.92vw]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {index !== services.length - 1 && <hr />}
              </div>
            ))}
            <p className="font-pretendard font-normal primary:text-[0.585rem] text-[1.25vw] primary:leading-[0.878rem] leading-[1.88vw] text-gray-200  primary:px-[0.78rem] px-[1.67vw]">
              * 포스팅 원본 전달의 경우, 캠페인 신청 전 동의하지 않은 인플루언서의 파일은 전달이 불가할 수 있음을 사전에
              알려드립니다.
            </p>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default AgencyService
