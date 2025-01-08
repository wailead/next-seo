import { TitleForm, SectionLayout } from '@/components'

function Partners() {
  return (
    <SectionLayout>
      <div className="flex justify-center items-center ">
        <TitleForm subtitle="REVIEW" title={`400개의 업체와 마케팅을\n함께하고 있습니다`} pb="pb-0">
          <div className="flex primary:gap-[1.5rem] gap-[3.15vw]  flex-col">
            <div className="flex primary:gap-[1.5rem] gap-[3.15vw]">
              {/* 첫 번째 카드 레이아웃 */}
              <div className="relative primary:w-[24rem] w-[50.4vw] primary:h-[23.27rem] h-[48.867vw] bg-[url('/assets/images/review_img_0.png')] bg-cover rounded-[1rem] primary:pb-[1.82rem] pb-[3.822vw] primary:px-[1.82rem] px-[3.822vw] flex justify-center items-end">
                <div className="flex flex-col primary:gap-[0.25rem] gap-[0.525vw]  ">
                  <p className="font-pretendard font-bold primary:text-[0.875rem] text-[1.9vw] text-white-default primary:w-[20.25rem] w-[42.525vw]">
                    롯데 호텔 월드
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    신규 캠페인 홍보 진행
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default  tracking-[-0.05em] primary:w-[17.7rem] w-[37.17vw]">
                    “이번에 이용해보면서 정말 편리했어서, 도움 필요할 때마다 캠페인 등록하겠습니다! ㅎㅎ<br></br>{' '}
                    매니저님 덕분에 이렇게 편하게 모집하네요”
                  </p>
                </div>
              </div>

              {/* 추가 레이아웃 */}
              <div className="flex flex-col primary:gap-[1.5rem] gap-[3.15vw]">
                {/* 두 번째 카드 레이아웃 */}
                <div className="flex flex-col primary:gap-[0.25rem] gap-[0.525vw] primary:w-[15.6rem] w-[32.76vw] primary:h-[11rem] h-[23.1vw] bg-[url('/assets/images/review_img_1.png')] bg-cover rounded-[1rem] primary:pb-[1.04rem] pb-[2.18vw] primary:px-[1.04rem] px-[2.18vw]  justify-end">
                  <p className="font-pretendard font-bold primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    이비스 스타일 앰배서더
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    호텔 홍보 진행
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    “호텔 홍보에 정말 많은 도움이 됩니다. 신경써주셔서 너무 감사합니다. ^^”
                  </p>
                </div>

                {/* 세 번째 카드 레이아웃 */}
                <div className="flex flex-col primary:gap-[0.25rem] gap-[0.525vw] primary:w-[15.6rem] w-[32.76vw] primary:h-[11rem] h-[23.1vw] bg-[url('/assets/images/review_img_2.png')] bg-cover rounded-[1rem] primary:pb-[1.04rem] pb-[2.18vw] primary:px-[1.04rem] px-[2.18vw]  justify-end">
                  <p className="font-pretendard font-bold primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    그랩디오션
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    호텔 홍보 진행
                  </p>
                  <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] text-white-default">
                    “무료로 이렇게 좋은 홍보를 할 수 있다는 너무 놀랍습니다. 다른 호텔도 홍보 많이많이 하겠습니다~
                    감사합니다!”
                  </p>
                </div>
              </div>
            </div>
            <div>
              <object
                type="text/html"
                data="https://www.youtube.com/embed/mL5BoE_2Q5A?si=rx6o8I3mXyx-7jYT"
                className="relative primary:w-[41.1rem] w-[86.31vw] primary:h-[23.27rem] h-[48.867vw] rounded-[1rem]"></object>
            </div>
          </div>
        </TitleForm>
      </div>
    </SectionLayout>
  )
}

export default Partners
