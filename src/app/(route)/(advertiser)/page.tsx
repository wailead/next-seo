import About from './_view/about/About'
import CompanyBanner from './_view/company-banner/CompanyBanner'
import GovermentBanner from './_view/goverment-banner/GovermentBanner'
import Inquiry from './_view/inquiry/Inquiry'
import MoreService from './_view/more-service/MoreService'
import OurServices from './_view/our-services/OurServices'
import Partners from './_view/partners/Partners'
import Performance from './_view/performance/Performance'
import PromotionVideo from './_view/promotion-video/PromotionVideo'
import Question from './_view/question/Question'
import Reference from './_view/reference/Reference'
import ServiceIntroduction from './_view/service-introduction/ServiceIntroduction'

function Advertiser() {
  return (
    <div className="mt-[3.315rem] font-pretendard">
      <PromotionVideo />
      <div id="serviceIntroduction" className="scroll-mt-[3.315rem]">
        <ServiceIntroduction />
      </div>
      <div id="performance">
        <Performance />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="ourServices">
        <OurServices />
      </div>
      <div id="reference" className="scroll-mt-[3.315rem]">
        <Reference />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <CompanyBanner />
      <GovermentBanner />
      <div id="moreService" className="scroll-mt-[3.315rem]">
        <MoreService />
      </div>
      <div id="question" className="scroll-mt-[3.315rem]">
        <Question />
      </div>
      <div id="inquiry" className="scroll-mt-[3.315rem]">
        <Inquiry />
      </div>
    </div>
  )
}

export default Advertiser
