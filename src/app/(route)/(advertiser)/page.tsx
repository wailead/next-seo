import CompanyBanner from './_view/company-banner/CompanyBanner'
import GovermentBanner from './_view/goverment-banner/GovermentBanner'
import Inquiry from './_view/inquiry/Inquiry'
import MoreService from './_view/more-service/MoreService'
import Performance from './_view/performance/Performance'
import Question from './_view/question/Question'
import ServiceIntroduction from './_view/service-introduction/ServiceIntroduction'

function Advertiser() {
  return (
    <div>
      <ServiceIntroduction />
      <Performance />
      <CompanyBanner />
      <GovermentBanner />
      <MoreService />
      <Inquiry />
      <Question />
    </div>
  )
}

export default Advertiser
