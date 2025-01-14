'use client'

import { SectionLayout, TitleForm } from '@/components'
import { useState } from 'react'
import ReferenceCard from './components/ReferenceCard'
import pyeongchang from '@/public/assets/images/reference/pyeongchang'
import city from '@/public/assets/images/reference/city'
import more from '@/public/assets/images/reference/more'
import east from '@/public/assets/images/reference/east'
import Image, { StaticImageData } from 'next/image'
import ReferenceSlideY from './components/ReferenceSlideY'
import ReferenceSlideX from './components/ReferenceSlideX'

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
          className={`flex primary:h-[39.125rem] mobile:h-[83.47vw] mobile:pl-0 pl-[3.89vw] overflow-hidden justify-between ${selectTitle === 'more' ? 'pr-0' : 'primary:pr-[1.25rem] mobile:pr-[2.67vw]'} `}>
          <TitleForm
            title={`와이리 인플루언서 마케팅\n 사례들을 확인해보세요`}
            subtitle="REFERENCE"
            titleColor="text-white-default"
            subTitleColor="text-white-default"
            pb="0"
            pr="primary:pl-[3.25rem] mobile:pl-[6.93vw] mobile:pr-0">
            <div className="flex flex-col justify-between primary:gap-[1.82rem] mobile:gap-[3.88vw] gap-[3.89vw]">
              <div className="flex flex-col primary:gap-[1.25rem] mobile:gap-[2.67vw] gap-[3.89vw]  primary:h-[10.438rem] mobile:h-[22.27vw] h-[41.67vw] mobile:pb-0 pb-[2.78vw]">
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
              <div>
                <ReferenceSlideX images={slideTitle} selectTitle={selectTitle} />
              </div>
              <div className="relative flex primary:w-[23.75rem] mobile:w-[50.67vw] w-[102.78vw] primary:h-[16.563rem] mobile:h-[35.33vw] h-[71.39vw] items-end ">
                {selectTitle !== 'more' && (
                  <Image
                    src={`/assets/images/reference/${selectTitle}/${selectTitle}_main.png`}
                    alt={`${selectTitle}`}
                    width={600} // 380
                    height={500} // 264
                    className="absolute primary:left-[-1.125rem] mobile:left-[-2.4vw] left-[-13.61vw] primary:bottom-[0.875rem] mobile:bottom-[1.86vw]"
                  />
                )}
              </div>
            </div>
          </TitleForm>
          <ReferenceSlideY images={slideTitle} selectTitle={selectTitle} />
        </div>
      </SectionLayout>
    </div>
  )
}
export default Reference
