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
            <h4 className="font-pretendard font-bold text-[1.17rem] leading-[1.82rem] text-white-default">
              투자 가능한 시간에 따라 가격 플랜을 선택하고 <br /> 마케팅 결과만 받아보세요
            </h4>
            <p className="font-pretendard font-normal text-[1.04rem] leading-[1.56rem] text-gray-100">
              대부분 내용은 시스템상에서 직접 무료로 진행이 가능하오나,
              <br />
              체크 표시된 부분은 와이리에서 대행을 진행해드립니다
            </p>
          </div>
          <div className="flex gap-[3.9rem] justify-end pr-[0.78rem]">
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="w-[6.24rem] rounded-[0.65rem] border-[1px] py-[0.52rem] font-pretendard text-center border-[#B1E7E8]">
                <p className="font-semibold text-[0.91rem] leading-[1.365rem] text-white-default">무료</p>
                <p className="font-normal text-[0.78rem] leading-[1.17rem] text-[#B1E7E8]">직접진행</p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.5rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold text-[0.78rem] leading-[1.17rem] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="w-[6.24rem] rounded-[0.65rem] py-[0.52rem] font-pretendard text-center bg-[#B1E7E8] text-gray-300">
                <p className="font-semibold text-[0.91rem] leading-[1.365rem]">기본 멤버십</p>
                <p className="font-normal text-[0.78rem] leading-[1.17rem]">월 39,000원</p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.5rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold text-[0.78rem] leading-[1.17rem] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-[0.78rem] pt-[2.015rem] items-center">
              <div className="w-[6.24rem] rounded-[0.65rem] py-[0.52rem] font-pretendard text-center bg-[#B1E7E8] text-gray-300">
                <p className="font-semibold text-[0.91rem] leading-[1.365rem]">플러스 멤버십</p>
                <p className="font-normal text-[0.78rem] leading-[1.17rem]">월 49,000원</p>
              </div>
              <Link href="#inquiry" className="rounded-[1.82rem] py-[0.5rem] px-[0.938rem] bg-black w-fit">
                <p className="font-pretendard font-semibold text-[0.78rem] leading-[1.17rem] text-white-default">
                  이용하기
                </p>
              </Link>
            </div>
          </div>
          <div className="pt-[2em] flex flex-col gap-[0.618rem]">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col gap-[0.65rem]">
                <div className="flex gap-[0.65rem] px-[0.78rem]">
                  <p className="font-pretendard font-normal text-[0.78rem] leading-[1.17rem] text-white-default w-[12.5rem]">
                    <span dangerouslySetInnerHTML={{ __html: service.serviceName }} />
                  </p>
                  <div className="flex w-full justify-end gap-[3.9rem]">
                    <div className="w-[6.24rem] flex items-center justify-center">
                      <CustomImage
                        src={`/assets/icons/plan_false.svg`}
                        alt="plan false 아이콘"
                        w="w-[1.365rem]"
                        h="h-[1.365rem]"
                      />
                    </div>
                    {service.planCheck.map((check, i) => (
                      <div key={i} className="w-[6.24rem] flex items-center justify-center">
                        <CustomImage
                          src={`/assets/icons/plan_${check}.svg`}
                          alt={`plan ${check} 아이콘`}
                          w="w-[1.365rem]"
                          h="h-[1.365rem]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {index !== services.length - 1 && <hr />}
              </div>
            ))}
            <p className="font-pretendard font-normal text-[0.585rem] leading=[0.878rem] text-gray-200">
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
