import CompanyBanner from './_view/company-banner/CompanyBanner'
import GovermentBanner from './_view/goverment-banner/GovermentBanner'
import MoreService from './_view/more-service/MoreService'

function Advertiser() {
  return (
    <div>
      <CompanyBanner />
      <GovermentBanner />
      <MoreService />
    </div>
  )
}

export default Advertiser
