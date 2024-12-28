'use client'
import { SectionLayout, TitleForm } from '@/components'
import ServiceCard from './components/ServiceCard'

function MoreService() {
  return (
    <SectionLayout>
      <TitleForm title="더 많은 서비스들이 있어요" subtitle="MORE SERVICE">
        <div className="flex flex-col primary:gap-[2.813rem] gap-[6vw] justify-center items-center primary:pt-[1.125rem] pt-[2.4vw]">
          <div className="flex gap-2">
            <ServiceCard
              img="/images/advertiser/more-service/more_service_0.png"
              title="매크로 유튜버 서비스"
              desc={`믿을 수 있는 와이리 유튜버를 통해 PPL에서\n브랜디드 콘텐츠까지 원하는 영상을 제작해보세요.`}
            />
            <ServiceCard
              img="/images/advertiser/more-service/more_service_1.png"
              title="실속 패키지"
              desc={`객실 혹은 상품 제공 없이 저렴한 금액으로\n빠르게 마케팅을 진행해보세요.`}
            />
          </div>
          <div className="flex gap-2">
            <ServiceCard
              img="/images/advertiser/more-service/more_service_2.png"
              title="세일즈 마케팅 (구매제)"
              desc={`유휴객실을 적극적으로 활용하여 세일즈를 통한\n매출 증대와 마케팅을 동시에 진행해보세요.`}
            />
            <ServiceCard
              img="/images/advertiser/more-service/more_service_3.png"
              title="블랙 인플루언서"
              desc={`보다 확실한 홍보 방법! 와이리 인플루언서 중\n가장 영향력이 높은 50인이 마케팅을 진행합니다.`}
            />
          </div>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}
export default MoreService
