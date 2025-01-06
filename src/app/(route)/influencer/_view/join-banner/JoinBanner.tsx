import JoinBox from './components/JoinBox'
import PhoneImageBox from './components/phone-image-box'

function JoinBanner() {
  return (
    <section className="h-[45vw] primary:h-[21.25rem] w-full bg-primary-200 flex justify-center bg-[url('/assets/images/background_bubble.png')] bg-[length:100vw_100%] primary:bg-[length:800px_100%] bg-[60%_center] bg-repeat-x">
      <div className="w-primary h-full flex justify-center items-center gap-2">
        <JoinBox />
        <PhoneImageBox />
      </div>
    </section>
  )
}
export default JoinBanner
