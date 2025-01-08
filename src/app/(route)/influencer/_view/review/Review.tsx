import { TitleForm, SectionLayout } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'

function Review() {
  return (
    <SectionLayout>
      <div className="flex justify-center items-center">
        <TitleForm subtitle="REVIEW" title="이용후기">
          <div className="flex primary:gap-[1.5rem] gap-[3.15vw] ">
            {/* 첫 번째 카드 레이아웃 */}
            <div className="relative primary:w-[24rem] w-[50.4vw] primary:h-[23.27rem] h-[48.867vw] bg-[url('/images/influencer/blog4.png')] bg-cover rounded-[1rem] primary:pb-[1.82rem] pb-[3.822vw] primary:px-[1.82rem] px-[3.822vw] flex justify-center items-end">
              <div className="flex flex-col primary:gap-[0.25rem] gap-[0.525vw]">
                <CustomImage
                  src="./assets/icons/quote.svg"
                  w="primary:w-[1.25rem] w-[2.625vw]"
                  h="h-[1rem] h-[2.1vw]"
                  alt="quote.svg"
                />
                <p className="font-pretendard font-bold primary:text-[1.25rem] text-[2.7vw] text-white-default">
                  네이버 블로거 B님
                </p>
                <p className="font-pretendard font-normal primary:text-[0.875rem] text-[1.9vw] primary:leading-[1.5rem] leading-[3vw] text-white-default text-left underline-offset-auto decoration-skip-ink-none">
                  처음에는 인플루언서 협업 제안을 받았을 때, 이 가격에 정말 이용이 가능한지 반신반의 했는데, 정말 모든
                  상품을 90% 할인 가격에 내가 원하는 날 이용할 수 있는 곳이었어요.
                </p>
              </div>
            </div>

            {/* 추가 레이아웃 */}
            <div className="flex flex-col primary:gap-[1.5rem] gap-[3.15vw]">
              {/* 두 번째 카드 레이아웃 */}
              <div className="flex flex-col primary:gap-[0.25rem] gap-[0.5325vw] primary:w-[15.6rem] w-[32.76vw] primary:h-[11rem] h-[23.1vw] bg-[#4D4D4D] rounded-[1rem] primary:pb-[1.82rem] pb-[3.822vw] primary:px-[1.04rem] px-[2.12vw] justify-end">
                <CustomImage
                  src="./assets/icons/quote.svg"
                  w="primary:w-[1.25rem] w-[2.625vw]"
                  h="primary: h-[1rem] h-[2.1vw]"
                  alt="quote.svg"
                />
                <p className="font-pretendard font-bold primary:text-[0.875rem] text-[1.8666vw] text-white-default">
                  인스타그래머 J님
                </p>
                <p className="primary:text-[0.875rem] text-[1.8666vw] font-normal  text-white-default text-left underline-offset-auto decoration-skip-ink-none primary:tracking-[-0.05rem] tracking-[-0.1vw]">
                  위치가 좋은 숙소가 많아 너무 좋습니다. 저 같이 여행 피드를 제작하는 사람들한테는 너무 좋은
                  플랫폼이에요 ㅠㅠ
                </p>
              </div>

              {/* 세 번째 카드 레이아웃 */}
              <div className="flex flex-col primary:gap-[0.25rem] gap-[0.5325vw] primary:w-[15.6rem] w-[32.76vw] primary:h-[11rem] h-[23.1vw] bg-[#4D4D4D] rounded-[1rem] primary:pb-[1.82rem] pb-[3.822vw] primary:px-[1.04rem] px-[2.12vw] justify-end">
                <CustomImage
                  src="./assets/icons/quote.svg"
                  w="primary:w-[1.25rem] w-[2.625vw]"
                  h="primary:h-[1rem] h-[2.1vw]"
                  alt="quote.svg"
                />
                <p className="font-pretendard font-bold primary:text-[0.875rem] text-[1.8666vw] text-white-default">
                  유튜버 B님
                </p>
                <p className="primary:text-[0.875rem] text-[1.8666vw] font-normal  text-white-default text-left underline-offset-auto decoration-skip-ink-none primary:tracking-[-0.05rem] tracking-[-0.1vw]">
                  70만원 럭셔리 호텔 2박 3일 패키지 상품을 7만원에 친구랑 같이 갔다 왔어요. 제가 원하는 시기에 신청할 수
                  있어 여행 겸 콘텐츠 제작 겸 떠나기에 너무 좋아요!
                </p>
              </div>
            </div>
          </div>
        </TitleForm>
      </div>
    </SectionLayout>
  )
}

export default Review
