'use client'

import { SectionLayout, TitleForm } from '@/components'
import QuestionBox from '@/components/question-box/QuestionBox'
import { useState } from 'react'

interface QuestionData {
  question: string
  answer: string | { text: string; link?: string }
  isLinkFirst?: boolean
}

const questions: QuestionData[] = [
  {
    question: '정말 무료인가요?',
    answer:
      '네, 그렇습니다. 와이리 기본 서비스의 경우 인플루언서에게 서비스 수수료를 받고 있습니다. 따라서 파트너사가 부담할 금액은 없습니다.',
  },
  {
    question: '아무나 와이리 인플루언서가 될 수 있나요?',
    answer: {
      text: `아니요. 아무나 와이리 인플루언서가 될 수 있는 것은 아닙니다. 회원이 등록한 채널에 대해 와이리 운영팀이 직접 검수하는 작업을 통해 와이리에서 설정한 최소 승인 기준을 통과한 인플루언서만 활동할 수 있습니다. \n 자세한 최소 승인 기준은 아래 링크를 통해 확인해 주세요.`,
      link: 'www.wairi.co.kr/influencer/board/view/notice/108/',
    },
    isLinkFirst: false,
  },
  {
    question: '인플루언서가 돈도 내고 체험하고 싶어 하나요?',
    answer:
      '네, 그렇습니다. 인플루언서들도 정기적인 콘텐츠 발행이 필요합니다. 와이리는 타 플랫폼과 달리 인플루언서가 날짜를 선택하여 신청 할수 있어 꾸준하게 신청건이 발생합니다. 파주의 한 숙박업체의 경우 한 달에 30건 이상의 신청이 발생합니다.',
  },
  {
    question: '인플루언서에게 추가적인 요구를 해도 되나요?',
    answer:
      '네, 가능합니다. 캠페인 등록 시 상세페이지에 추가적인 요구사항을 미리 적어주시면 인플루언서가 해당 내용을 확인하고 해당 내용에 동의할 경우 신청이 발생합니다. 단, 신청 및 선정 이후 추가적인 요구사항은 반영되지 않을 수 있으며 포스팅 제작 난이도가 높아질 경우 신청이 저조할 수 있습니다.',
  },
  {
    question: '최저가 보상제 (BRG)에 저촉되지는 않나요?',
    answer:
      '와이리 상품의 가격은 인플루언서에게 와이리가 받는 연결 수수료에 해당하며 호텔 측이 고객에게 객실을 판매하는 금액이 아닙니다. 호텔은 와이리에게 상품을 협찬해 주는 것으로 해당 페널티 규정에 해당되지 않습니다.',
  },
]

function Question() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <SectionLayout>
      <TitleForm subtitle="QUESTION" title="자주 묻는 질문">
        <section>
          <ul className="flex flex-col gap-[0.78rem]">
            {questions.map((q, index) => (
              <li key={index} className="list-none">
                <QuestionBox
                  question={q.question}
                  answer={q.answer}
                  isOpen={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                  isLinkFirst={q.isLinkFirst}
                />
              </li>
            ))}
          </ul>
        </section>
      </TitleForm>
    </SectionLayout>
  )
}

export default Question
