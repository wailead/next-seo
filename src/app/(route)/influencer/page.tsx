import { Introduction, Mainheader, Campaign, Question } from './_view'
import JoinBanner from './_view/join-banner/join-banner'
import MarketingBanner from './_view/marketing-banner/marketing-banner'

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
