'use client'

import CampaignCard from '../components/CampaignCard'
import Button from '@/components/button/button'
import { useState } from 'react'
import CampaignModal from './CampaignModal'

function Campaign() {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    if (showModal) {
      document.body.style.overflow = 'unset'
    } else {
      document.body.style.overflow = 'hidden'
    }
    setShowModal(!showModal)
  }
  console.log(showModal)

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-primary justify-center text-center pt-[47px] px-[61px] gap-[50px] ">
        <h2 className="text-[25px] font-bold leading-[36px] text-gray-600">
          숙박 및 상품을 <span className="text-primary-default">90% 할인가</span>에 체험해보세요
        </h2>
        <div className="grid grid-cols-3 gap-x-[18px] gap-y-[34.5px] justify-items-center">
          <CampaignCard img="/images/sight/we-hotel.png" title="[제주 서귀포] WE호텔 메디컬 스파센터 테라피" price="300,000" sale="30,000" />
          <CampaignCard img="/images/sight/eden-paradise.png" title="[경기도 이천] 에덴파라다이스호텔" price="100,000" sale="19,000" />
          <CampaignCard img="/images/sight/grab-the-ocean.png" title="[부산 송도] 그랩디오션 송도" price="100,000" sale="10,000" />
          <CampaignCard img="/images/sight/sr-hotel.png" title="[서울 강서구 SR호텔 마곡] " price="162,000" sale="16,200" />
          <CampaignCard img="/images/sight/hey-seogwipo.png" title="[제주 서귀포]헤이,서귀포" price="150,000" sale="15,000" />
          <CampaignCard img="/images/sight/barns-hill.png" title="[강원도 홍천] 반스힐리조트 " price="454,000" sale="45,400" />
          <CampaignCard img="/images/sight/dpart.png" title="" price="" sale="" />
          <CampaignCard img="/images/sight/con-rad.png" title="" price="" sale="" />
          <CampaignCard img="/images/sight/surf-holic.png" title="" price="" sale="" />
          {/** header height가 변경 될 경우 top 수치 조정 해서 맞춰야 합니다. */}
          <div className="absolute w-primary h-[300px] bg-gradient-to-t top-[1155px] from-white-default from-40% z-10"></div>
          {/** header height가 변경 될 경우 top 수치 조정 해서 맞춰야 합니다. */}
          <Button className="absolute top-[1385px] bg-gray-300 px-[31px] py-[3.5px] rounded-[29.12px]  hover:shadow-md hover:bg-[#6d6d6d] z-20" onClick={handleModal}>
            <span className="font-medium text-[15.6px] leading-[28px] text-white-default  ">더 많은 캠페인 보기</span>
          </Button>
          {showModal && <CampaignModal handleModal={handleModal} />}
        </div>
      </div>
    </div>
  )
}
export default Campaign
