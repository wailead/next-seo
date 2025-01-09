import { SectionLayout, TitleForm } from '@/components'

function Partners() {
  return (
    <SectionLayout>
      <TitleForm subtitle="REVIEW" title={`400개의 업체와 마케팅을\n함께하고 있습니다`} pb="pb-0">
        <div className="flex flex-col primary:gap-[1.5rem] mobile:gap-[3.15vw] gap-[4vw] ">
          <div className="flex  mobile:flex-row flex-col primary:gap-[1.5rem] mobile:gap-[3.15vw] gap-[4vw]">
            {/* 첫 번째 카드 레이아웃 */}
            <div className="primary:w-[24rem] mobile:w-[50.4vw] w-[83.8vw] primary:h-[23.27rem] mobile:h-[48.867vw] h-[52.2vw] bg-[url('/assets/images/review_img_0.png')] bg-cover rounded-[1rem]  primary:pb-[2.1rem] mobile:pb-[3.822vw] pb-[3vw]  mobile:pt-[5vw] pt-[5vw] primary:px-[1.82rem] mobile:px-[3.822vw] px-[5vw] flex justify-center items-end">
              <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.525vw] gap-[0.924vw] ">
                <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  롯데 호텔 월드
                </p>
                <p className="font-pretendard font-normal primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  신규 캠페인 홍보 진행
                </p>
                <p className="font-pretendard font-normal primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] text-white-default  tracking-[-0.05em]">
                  “이번에 이용해보면서 정말 편리했어서, 도움 필요할 때마다 캠페인 등록하겠습니다! ㅎㅎ<br></br> 매니저님
                  덕분에 이렇게 편하게 모집하네요”
                </p>
              </div>
            </div>

            {/* 추가 레이아웃 */}
            <div className="flex flex-col primary:gap-[1.5rem] mobile:gap-[3.15vw] gap-[4vw]">
              {/* 두 번째 카드 레이아웃 */}
              <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.525vw] gap-[0.924vw] primary:w-[15.6rem] mobile:w-[32.76vw] w-[83.8vw] primary:h-[11rem] mobile:h-[23.1vw] h-[52.2vw] bg-[url('/assets/images/review_img_1.png')] bg-cover rounded-[1rem] primary:pb-[1.04rem] mobile:pb-[2.18vw] pb-[3vw] primary:px-[1.04rem] mobile:px-[2.18vw] px-[5vw]  justify-end">
                <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  이비스 스타일 앰배서더
                </p>
                <p className="primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  호텔 홍보 진행
                </p>
                <p className="font-pretendard font-normal primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] text-white-default  tracking-[-0.05em] primary:w-[17.7rem] mobile:w-[37.17vw] w-[56.1vw]">
                  “호텔 홍보에 정말 많은 도움이 됩니다. 신경써주셔서 너무 감사합니다. ^^”
                </p>
              </div>
              {/* 세 번째 카드 레이아웃 */}
              <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.525vw] gap-[0.924vw] primary:w-[15.6rem] mobile:w-[32.76vw] h- primary:h-[11rem] mobile:h-[23.1vw] h-[52.2vw] bg-[url('/assets/images/review_img_2.png')] bg-cover rounded-[1rem]  primary:pb-[1.04rem] mobile:pb-[2.18vw] pb-[3vw] primary:px-[1.04rem] mobile:px-[2.18vw] px-[5vw]  justify-end">
                <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  그랩디오션
                </p>
                <p className="primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                  호텔 홍보 진행
                </p>
                <p className="font-pretendard font-normal primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] text-white-default  tracking-[-0.05em] primary:w-[17.7rem] mobile:w-[37.17vw] w-[56.1vw]">
                  “무료로 이렇게 좋은 홍보를 할 수 있다는 너무 놀랍습니다. 다른 호텔도 홍보 많이많이 하겠습니다~
                  감사합니다!”
                </p>
              </div>
            </div>
          </div>
          <div className="primary:w-[40.375rem] mobile:w-[86.13vw] w-[83.8vw] primary:h-[23.27rem] mobile:h-[48.867vw] h-[47.5vw] ">
            <object
              type="text/html"
              data="https://www.youtube.com/embed/mL5BoE_2Q5A?si=rx6o8I3mXyx-7jYT"
              className="relative w-full h-full rounded-[1rem] "></object>
          </div>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}

export default Partners
