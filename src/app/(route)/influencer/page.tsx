import { Introduction, Mainheader, Campaign, Question } from './_view'
import JoinBanner from './_view/join-banner/JoinBanner'
import MarketingBanner from './_view/marketing-banner/MarketingBanner'

function InfluencerPage() {
  return (
    <div>
      <Mainheader />
      <Campaign />
      <Introduction />
      <MarketingBanner />
      <Question />
      <JoinBanner />
    </div>
  )
}

export default InfluencerPage
