import BackgroundImageBox from './components/background-image-box'
import JoinBox from './components/join-box'
import PhoneImageBox from './components/phone-image-box'

function JoinBanner() {
  return (
    <section className="h-[21.25rem] w-full bg-primary-200 relative">
      <BackgroundImageBox />
      <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center">
        <div className="w-primary h-full flex justify-center items-center gap-2">
          <JoinBox />
          <PhoneImageBox />
        </div>
      </div>
    </section>
  )
}
export default JoinBanner
