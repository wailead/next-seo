import { SectionLayout, TitleForm } from '@/components'
import CustomImage from '@/components/custom-image/CustomImage'

function Review() {
  return (
    <SectionLayout>
      <TitleForm subtitle="REVIEW" title="이용후기">
        <div className="flex mobile:flex-row flex-col  primary:gap-[1.5rem] mobile:gap-[3.15vw] gap-[4vw]">
          {/* 첫 번째 카드 레이아웃 */}
          <div className="relative primary:w-[24rem] mobile:w-[50.4vw] w-[83.8vw] primary:h-[23.27rem] mobile:h-[48.867vw] h-[52.2vw] bg-[url('/images/influencer/blog4.png')] bg-cover rounded-[1rem]  primary:pb-[2.1rem] mobile:pb-[3.822vw] pb-[3vw]  primary:px-[1.82rem] mobile:px-[3.822vw] px-[5vw] flex justify-center items-end">
            <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.525vw] gap-[0.924vw] ">
              <CustomImage
                src="./assets/icons/quote.svg"
                w="primary:w-[1.25rem] mobile:w-[2.625vw] w-[5.1vw]"
                h="primary:h-[1rem] mobile:h-[2.1vw] h-[4.5vw]"
                alt="quote.svg"
              />
              <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                네이버 블로거 B님
              </p>
              <p className="font-pretendard font-normal primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] primary:leading-[1.5rem] mobile:leading-[3vw] leading-[4.5vw] text-white-default text-left undxerline-offset-auto decoration-skip-ink-none">
                처음에는 인플루언서 협업 제안을 받았을 때, 이 가격에 정말 이용이 가능한지 반신반의 했는데, 정말 모든
                상품을 90% 할인 가격에 내가 원하는 날 이용할 수 있는 곳이었어요.
              </p>
            </div>
          </div>

          {/* 추가 레이아웃 */}
          <div className="flex flex-col primary:gap-[1.5rem] mobile:gap-[3.15vw] gap-[4vw]">
            {/* 두 번째 카드 레이아웃 */}
            <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.5325vw] gap-[0.924vw] primary:w-[15.6rem] mobile:w-[32.76vw] w-[83.8vw] primary:h-[11rem] mobile:h-[23.1vw] h-[52.2vw] bg-[#4D4D4D] rounded-[1rem]  primary:pb-[1rem] mobile:pb-[3.822vw] pb-[3vw] primary:px-[1.04rem] mobile:px-[2.12vw] px-[5vw] justify-end">
              <CustomImage
                src="./assets/icons/quote.svg"
                w="primary:w-[1.25rem] mobile:w-[2.625vw] w-[5.1vw]"
                h="primary:h-[1rem] mobile:h-[2.1vw] h-[4.5vw]"
                alt="quote.svg"
              />
              <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                인스타그래머 J님
              </p>
              <p className="primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] font-normal  text-white-default text-left underline-offset-auto decoration-skip-ink-none primary:tracking-[-0.05rem] mobile:tracking-[-0.1vw] tracking-[-0.15vw]">
                위치가 좋은 숙소가 많아 너무 좋습니다. 저 같이 여행 피드를 제작하는 사람들한테는 너무 좋은 플랫폼이에요
                ㅠㅠ
              </p>
            </div>

            {/* 세 번째 카드 레이아웃 */}
            <div className="flex flex-col primary:gap-[0.25rem] mobile:gap-[0.5325vw] gap-[0.924vw] primary:w-[15.6rem] mobile:w-[32.76vw] w-[83.8vw] primary:h-[11rem] mobile:h-[23.1vw] h-[52.2vw] bg-[#4D4D4D] rounded-[1rem]  primary:pb-[1rem] mobile:pb-[3.822vw] pb-[3vw] primary:px-[1.04rem] mobile:px-[2.12vw] px-[5vw] justify-end">
              <CustomImage
                src="./assets/icons/quote.svg"
                w="primary:w-[1.25rem] mobile:w-[2.625vw] w-[5.1vw]"
                h="primary:h-[1rem] mobile:h-[2.1vw] h-[4.5vw]"
                alt="quote.svg"
              />
              <p className="font-pretendard font-bold primary:text-[1.1rem] mobile:text-[1.9vw] text-[3.4vw] text-white-default">
                유튜버 B님
              </p>
              <p className="primary:text-[0.875rem] mobile:text-[1.9vw] text-[3.8vw] font-normal  text-white-default text-left underline-offset-auto decoration-skip-ink-none primary:tracking-[-0.05rem] mobile:tracking-[-0.1vw] tracking-[-0.15vw]">
                70만원 럭셔리 호텔 2박 3일 패키지 상품을 7만원에 친구랑 같이 갔다 왔어요. 제가 원하는 시기에 신청할 수
                있어 여행 겸 콘텐츠 제작 겸 떠나기에 너무 좋아요!
              </p>
            </div>
          </div>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}

export default Review
