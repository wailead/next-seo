import About from './_view/about/About'
import CompanyBanner from './_view/company-banner/CompanyBanner'
import GovermentBanner from './_view/goverment-banner/GovermentBanner'
import Inquiry from './_view/inquiry/Inquiry'
import MoreService from './_view/more-service/MoreService'
import OurServices from './_view/our-services/OurServices'
import Performance from './_view/performance/Performance'
import PromotionVideo from './_view/promotion-video/PromotionVideo'
import Question from './_view/question/Question'
import Reference from './_view/reference/Reference'
import ServiceIntroduction from './_view/service-introduction/ServiceIntroduction'

function Advertiser() {
  return (
    <div>
      <PromotionVideo />
      <ServiceIntroduction />
      <Performance />
      <About />
      <OurServices />
      <Reference />
      <CompanyBanner />
      <GovermentBanner />
      <MoreService />
      <Question />
      <Inquiry />
    </div>
  )
}

export default Advertiser
