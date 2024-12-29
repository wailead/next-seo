'use client'

import { SectionLayout, TitleForm } from '@/components'
import { useState } from 'react'
import ReferenceCard from './components/ReferenceCard'
import pyeongchang from '@/public/images/advertiser/peference/pyeongchang'
import city from '@/public/images/advertiser/peference/city'
import more from '@/public/images/advertiser/peference/more'
import east from '@/public/images/advertiser/peference/east'
import Image, { StaticImageData } from 'next/image'
import ReferenceSlide from './components/ReferenceSlide'

function Reference() {
  const [selectTitle, setSelectTitle] = useState('pyeongchang')
  const pyeongchangs: StaticImageData[] = [...pyeongchang, ...pyeongchang]
  const citys: StaticImageData[] = [...city, ...city]
  const mores: StaticImageData[] = [...more, ...more]
  const easts: StaticImageData[] = [...east, ...east]
  const [slideTitle, setSlideTitle] = useState(pyeongchangs)

  const handleSelect = (title: string) => {
    if (title === 'pyeongchang') {
      setSlideTitle(pyeongchangs)
    }
    if (title === 'city') {
      setSlideTitle(citys)
    }
    if (title === 'more') {
      setSlideTitle(mores)
    }
    if (title === 'east') {
      setSlideTitle(easts)
    }
    setSelectTitle(title)
  }
  return (
    <div className="w-full  bg-primary-default ">
      <SectionLayout>
        <div
          className={`flex primary:h-[39.125rem] h-[83.47vw] overflow-hidden justify-between ${selectTitle === 'more' ? 'pr-0' : 'primary:pr-[1.25rem] pr-[2.67vw]'} `}>
          <TitleForm
            title={`와이리 인플루언서 마케팅\n 사례들을 확인해보세요`}
            subtitle="REFERENCE"
            titleColor="text-white-default"
            subTitleColor="text-white-default"
            pb="0"
            pr="primary:pl-[3.25rem] pl-[6.93vw] pr-0">
            <div className="flex flex-col justify-between primary:gap-[1.82rem] gap-[3.88vw]">
              <div className="flex flex-col  primary:gap-[1.25rem] gap-[2.67vw]  primary:h-[10.438rem] h-[22.27vw]">
                <ReferenceCard
                  title="와이리 X 평창 휘닉스파크"
                  id="pyeongchang"
                  selectTitle={selectTitle}
                  handleSelect={handleSelect}
                  descNum="61"
                />
                <ReferenceCard
                  title="와이리 X 씨티칼리지"
                  id="city"
                  selectTitle={selectTitle}
                  handleSelect={handleSelect}
                  descNum="24"
                />
                <ReferenceCard
                  title="와이리 X 이스트웨이브"
                  id="east"
                  selectTitle={selectTitle}
                  handleSelect={handleSelect}
                  descNum="1"
                />
                <ReferenceCard
                  title="더 많은 예시 보기"
                  id="more"
                  selectTitle={selectTitle}
                  handleSelect={handleSelect}
                  descNum=""
                />
              </div>
              <div className="relative primary:w-[23.75rem] w-[50.67vw] primary:h-[16.563rem] h-[35.33vw] items-end">
                {selectTitle !== 'more' && (
                  <Image
                    src={`/images/advertiser/peference/${selectTitle}/${selectTitle}_main.png`}
                    alt={`${selectTitle}`}
                    width={380}
                    height={264}
                    className="absolute primary:left-[-1.125rem] left-[-2.4vw] primary:bottom-[0.875rem] bottom-[1.86vw]"
                  />
                )}
              </div>
            </div>
          </TitleForm>
          <ReferenceSlide images={slideTitle} selectTitle={selectTitle} />
        </div>
      </SectionLayout>
    </div>
  )
}
export default Reference
