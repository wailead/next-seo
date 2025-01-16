import { Campaign, Introduction, Mainheader, Question, Review } from './_view'
import JoinBanner from './_view/join-banner/JoinBanner'
import MarketingBanner from './_view/marketing-banner/MarketingBanner'

function InfluencerPage() {
  return (
    <div className="mt-[3.315rem] font-pretendard">
      <Mainheader />
      <Campaign />
      <Introduction />
      <MarketingBanner />
      <Review />
      <Question />
      <JoinBanner />
    </div>
  )
}

export default InfluencerPage
