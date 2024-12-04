import { Introduction, Mainheader, Campaign, Question } from './_view'
import MarketingBanner from './_view/marketing-banner/marketing-banner'

function InfluencerPage() {
  return (
    <div>
      <Mainheader />
      <Campaign />
      <Introduction />
      <MarketingBanner />
      <Question />
    </div>
  )
}

export default InfluencerPage
