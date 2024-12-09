import { TitleForm, SectionLayout } from '@/components'
import IntroductionBox from './components/IntroductionBox'
import CustomImage from '@/components/custom-image/CustomImage'

function Introduction() {
  return (
    <SectionLayout>
      <TitleForm title="와이리 인플루언서가 되어야 하는 이유!" subtitle="INTRODUCTION">
        <div className="flex flex-col gap-[0.78rem]">
          <IntroductionBox
            className="bg-[#FFF9ED]"
            title="SNS 채널만 가지고 있다면!"
            description="와이리에서는 타 체험단 사이트와 비교하여<br/>가장 많은 SNS 종류를 승인해드리고 있어요!">
            <div className="flex justify-around bg-gradient-to-r from-white-default to-white-default/20 py-[1.3975rem] px-[2.6rem] mt-[1.5275rem] mb-[2.34rem] box-border">
              <CustomImage
                src="/images/influencer/channel_icon_0.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
              <CustomImage
                src="/images/influencer/channel_icon_1.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
              <CustomImage
                src="/images/influencer/channel_icon_2.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
              <CustomImage
                src="/images/influencer/channel_icon_3.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
              <CustomImage
                src="/images/influencer/channel_icon_4.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
              <CustomImage
                src="/images/influencer/channel_icon_5.svg"
                alt="네이버 로고"
                w="w-[4.5rem]"
                h="h-[4.5rem]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-white-100 relative pb-[3.7375rem]"
            title="원하는 날짜에 신청가능"
            description="정해진 날짜가 아닌, 원하는 시기에 캠페인을 신청할 수 있습니다. <br/ >이제 본인이 원하는 시기에 체험하세요!">
            <div className="absolute bottom-0 right-0">
              <CustomImage
                src="/images/influencer/introduction_calendar.svg"
                alt="introduction 캘린더 아이콘"
                w="w-[2 4rem]"
                h="h-[24rem]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-primary-200 relative pb-[3.7375rem]"
            title="체험 선정 여부 96시간 이내"
            description="빠른 결과 안내를 통해 여행을 차질 없이 계획해보세요.">
            <div className="absolute bottom-0 right-0">
              <CustomImage
                src="/images/influencer/introduction_check.svg"
                alt="introduction 체크 아이콘"
                w="w-[24rem]"
                h="h-[24rem]"
              />
            </div>
          </IntroductionBox>
          <IntroductionBox
            className="bg-white-200"
            title="와이리가 인증하는 영향력<br/>등급을 받아보세요"
            description="와이리는 채널에 따라 예상 영향력에 따라서 등급을 부여하고 있습니다.<br/>와이리에서 인증하는 인플루언서가 되어보세요.">
            <p className="font-pretendard font-light text-gray-100 pl-[2.6rem]">
              *채널 승급은 매월말에 신청을 받고 있습니다.{' '}
            </p>
            <div className="px-[9.23rem] flex justify-between">
              <CustomImage
                src="/images/influencer/introduction_grade_silver.svg"
                alt="introduction 실버 등급 아이콘"
                w="w-[11.358125rem]"
                h="h-[11.358125rem]"
              />
              <CustomImage
                src="/images/influencer/introduction_grade_gold.svg"
                alt="introduction 골드 등급 아이콘"
                w="w-[11.358125rem]"
                h="h-[11.358125rem]"
              />
              <CustomImage
                src="/images/influencer/introduction_grade_black.svg"
                alt="introduction 블랙 등급 아이콘"
                w="w-[11.358125rem]"
                h="h-[11.358125rem]"
              />
            </div>
          </IntroductionBox>
        </div>
      </TitleForm>
    </SectionLayout>
  )
}

export default Introduction
