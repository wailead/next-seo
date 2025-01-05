'use client'

import { SectionLayout, TitleForm } from '@/components'
import AboutBox from './components/AboutBox'
import ItemCarousel from './components/ItemCarousel'
import { useState } from 'react'

interface AboutData {
  pageNum: string
  title: string
  description: string
}

const abouts: AboutData[] = [
  {
    pageNum: '01',
    title: '신뢰성 있는 인플루언서',
    description:
      '와이리는 신뢰성 있는 인플루언서만을 모집하여 귀사의<br/>브랜드 이미지를 높이는 데 최선을 다하고 있습니다.',
  },
  {
    pageNum: '02',
    title: '정확한 타겟팅',
    description:
      '와이리 인플루언서는 특정 관심사나 취미를 가진 팔로워를 보유하고있습니다. 귀사의 서비스와 가장 잘 맞는 인플루언서를 찾아 타겟팅 마케팅을 수행할 수 있으므로 광고 효율이 높습니다.',
  },
  {
    pageNum: '03',
    title: '높은 ROI (투자 대비 수익)',
    description:
      '인플루언서 마케팅은 낮은 비용으로 높은 ROI를 제공합니다. 와이리 상위 인플루언서의 경우 평균적으로 네이버 유료 광고 76만원, 페이스북(인스타그램) 메타 유료 광고 18만원을 집행하는것과 유사한 효과를 내고 있습니다.',
  },
  {
    pageNum: '04',
    title: '콘텐츠 확보',
    description:
      '인플루언서는 사진, 동영상, 블로그 포스트 등 다양한 형태의 콘텐츠를 제작합니다. 이러한 콘텐츠는 귀사의 마케팅 자료로도 활용될 수 있습니다. 와이리를 통해 고퀄리티의 다양한 콘텐츠를 확보할 수 있습니다.',
  },
  {
    pageNum: '05',
    title: '소셜 미디어 참여도 증가',
    description:
      '인플루언서의 콘텐츠는 높은 참여도를 유도합니다. 댓글, 좋아요, 공유, 네이버 메인페이지 SEO 노출, 참여가 증가하여 소셜 미디어 활동이 활발해지고, 이는 귀사의 온라인 존재감을 강화합니다.',
  },
  {
    pageNum: '06',
    title: '새로운 고객층 유입',
    description:
      '인플루언서를 통해 새로운 고객층이 유입될 수 있습니다. 특히 젊은 세대나 특정 관심사를 가진 고객층을 효과적으로 유치할 수 있습니다. 와이리를 통해 다양한 인플루언서와 협력하면 새로운 시장을 개척할 수 있습니다.',
  },
]

function About() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <div className="bg-white-100">
      <SectionLayout>
        <TitleForm
          title="와이리 인플루언서 마케팅은<br/>어떤 장점이 있나요?"
          subtitle="ABOUT"
          gap="primary:gap-[3.023rem] gap-[6.46vw]">
          <ItemCarousel
            totalItems={abouts.length}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            className="absolute right-0 top-5 z-10">
            {abouts.map(about => (
              <div key={about.pageNum} className="snap-center">
                <AboutBox about={about} />
              </div>
            ))}
          </ItemCarousel>
        </TitleForm>
      </SectionLayout>
    </div>
  )
}

export default About
