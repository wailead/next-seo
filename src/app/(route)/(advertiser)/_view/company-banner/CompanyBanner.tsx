import logo1 from '@/public/assets/images/logo1'
import logo2 from '@/public/assets/images/logo2'
import { StaticImageData } from 'next/image'

import SlideBanner from './components/SlideBanner'

const logo1s: StaticImageData[] = [...logo1, ...logo1]
const logo2s: StaticImageData[] = [...logo2, ...logo2]
function CompanyBanner() {
  return (
    <div className="flex flex-col gap-3 py-10">
      <SlideBanner logos={logo1s} direction="right" />
      <SlideBanner logos={logo2s} direction="left" />
    </div>
  )
}

export default CompanyBanner
