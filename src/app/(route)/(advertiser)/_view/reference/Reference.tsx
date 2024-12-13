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
          className={`flex h-[39.125rem] overflow-hidden justify-between ${selectTitle === 'more' ? 'pr-0' : 'pr-[1.25rem]'} `}>
          <TitleForm
            title={`와이리 인플루언서 마케팅\n 사례들을 확인해보세요`}
            subtitle="REFERENCE"
            titleColor="text-white-default"
            subTitleColor="text-white-default"
            pb="0"
            pr="pl-[3.25rem] pr-0">
            <div className="flex flex-col justify-between gap-[1.82rem]">
              <div className="flex flex-col  gap-[1.25rem] ">
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
              <div className="relative w-[23.75rem] h-[16.563rem] items-end">
                {selectTitle !== 'more' && (
                  <Image
                    src={`/images/advertiser/peference/${selectTitle}/${selectTitle}_main.png`}
                    alt={`${selectTitle}`}
                    width={380}
                    height={100}
                    className="absolute left-[-1.125rem]"
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
