'use client'

import CampaignCard from './components/CampaignCard'
import { useState } from 'react'
import CampaignModal from './CampaignModal'

function Campaign() {
  const [showModal, setShowModal] = useState(false)

  const handleModalOpen = () => {
    if (showModal) {
      document.body.style.overflow = 'unset'
    } else {
      document.body.style.overflow = 'hidden'
    }
    setShowModal(!showModal)
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-primary justify-center text-center primary:pt-[2.9375rem] pt-[6.27vw] primary:py-[4.0625rem] py-[8.67vw] primary:px-[3.8125rem] px-[8.13vw] primary:gap-[3.125rem] gap-[6.67vw]">
        <h2 className="primary:text-[1.5625rem] text-[3.33vw] font-bold primary:leading-[2.25rem] leading-[4.80vw] text-gray-600">
          숙박 및 상품을 <span className="text-primary-default">90% 할인가</span>에 체험해보세요
        </h2>
        <div className="grid grid-cols-3 primary:gap-x-[1.125rem] gap-x-[2.4vw] primary:gap-y-[2.15rem] gap-y-[4.59vw] justify-items-center">
          <CampaignCard
            img="/images/influencer/sight/we-hotel.png"
            title="[제주 서귀포] WE호텔 메디컬 스파 센터 테라피"
            price="300,000"
            sale="30,000"
          />
          <CampaignCard
            img="/images/influencer/sight/eden-paradise.png"
            title="[경기도 이천] 에덴파라다이스호텔"
            price="100,000"
            sale="19,000"
          />
          <CampaignCard
            img="/images/influencer/sight/grab-the-ocean.png"
            title="[부산 송도] 그랩디오션 송도"
            price="100,000"
            sale="10,000"
          />
          <CampaignCard
            img="/images/influencer/sight/sr-hotel.png"
            title="[서울 강서구] SR호텔 마곡 "
            price="162,000"
            sale="16,200"
          />
          <CampaignCard
            img="/images/influencer/sight/hey-seogwipo.png"
            title="[제주 서귀포] 헤이, 서귀포"
            price="150,000"
            sale="15,000"
          />
          <CampaignCard
            img="/images/influencer/sight/barns-hill.png"
            title="[강원도 홍천] 반스힐리조트 "
            price="454,000"
            sale="45,400"
          />
          <CampaignCard img="/images/influencer/sight/dpart.png" title="" price="" sale="" />
          <CampaignCard img="/images/influencer/sight/con-rad.png" title="" price="" sale="" />
          <CampaignCard img="/images/influencer/sight/surf-holic.png" title="" price="" sale="" />
          {/** header height가 변경 될 경우 top 수치 조정 해서 맞춰야 합니다. */}
          <div className="absolute w-primary primary:h-[19rem] h-[40.53vw] bg-gradient-to-t primary:top-[72.1875rem] top-[154vw] from-white-default from-40% z-10"></div>
          {/** header height가 변경 될 경우 top 수치 조정 해서 맞춰야 합니다. */}
          <button
            className="absolute primary:top-[86.875rem] top-[185.33vw] bg-gray-300 primary:px-[1.9375rem] px-[4.13vw] primary:py-[0.21rem] py-[0.45vw] rounded-[1.82rem] hover:shadow-md hover:bg-[#6d6d6d] z-20"
            onClick={handleModalOpen}>
            <span className="font-medium primary:text-[0.975rem] text-[2.08vw] primary:leading-[1.75rem] leading-[3.73vw] text-white-default z-30">
              더 많은 캠페인 보기
            </span>
          </button>
          <CampaignModal handleModalOpen={handleModalOpen} showModal={showModal} />
        </div>
      </div>
    </div>
  )
}
export default Campaign
