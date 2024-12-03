import Button from '../button/button'

function MobileHeader() {
  return (
    <header className="flex justify-between">
      <img src="/images/wairi_logo_mobile.svg" alt="와이리(mobile) 로고" width={69.62} height={69.62} />
      <div className="flex items-center gap-11">
        <p className="font-pretendard font-normal text-2xl text-gray-300 ">
          여행하며
          <br /> 돈벌기
        </p>
        <div className="flex gap-4">
          <Button className="bg-primary-default px-[31.53px] py-[18.25px] rounded-[147.13px] hover:bg-[#3ecccc] hover:shadow-md">
            <img src="/images/apple.svg" alt="애플스토어 로고" width={31.53} height={31.53} />
          </Button>
          <Button className="bg-white-default border-primary-default border-[5.25px] px-[31.53px] py-[18.25px] rounded-[147.13px] hover:shadow-md">
            <img src="/images/google_play.svg" alt="구글플레이 로고" width={31.53} height={31.53} />
          </Button>
          <Button className="bg-primary-100  px-[31.53px] py-[10.51px] rounded-[147.13px] hover:bg-[#E6FBFB] hover:shadow-md">
            <p className="font-pretendard font-normal text-primary-default text-xl">광고주라면?</p>
          </Button>
          <Button className="bg-primary-100  px-[31.53px] py-[10.51px] rounded-[147.13px] hover:bg-[#E6FBFB] hover:shadow-md">
            <p className="font-pretendard font-normal text-primary-default text-xl">인플루언서라면?</p>
          </Button>
        </div>
      </div>
    </header>
  )
}
export default MobileHeader
