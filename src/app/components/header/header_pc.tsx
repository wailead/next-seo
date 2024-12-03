import Button from '../button/button'

function PcHeader() {
  return (
    <header className='flex justify-between'>
      <img src="/images/logo.png" alt="와이리(PC) 로고" width={182} height={62} />
      <div className="flex items-center gap-11">
        <p className='font-pretendard font-normal text-2xl text-gray-300 '>여행하며 돈벌기</p>
        <div className='flex gap-4'>
          <Button className="bg-primary-default px-8 py-3 rounded-[56px] flex items-center justify-center gap-1 hover:bg-[#3ecccc] hover:shadow-md">
            <img src="/images/apple.svg" alt="애플스토어 로고" width={24} height={24} />
            <p className="font-pretendard font-normal text-white-default text-xl ">APP Store</p>
          </Button>
          <Button className="bg-white-default border-primary-default border-2 px-8 py-3 rounded-[56px] flex items-center justify-center gap-1 hover:shadow-md">
            <img src="/images/google_play.svg" alt="구글플레이 로고" width={24} height={24} />
            <p className="font-pretendard font-normal text-primary-default text-xl">Google Play</p>
          </Button>
          <Button className="bg-primary-100 px-8 py-3 rounded-[56px] hover:bg-[#E6FBFB] hover:shadow-md">
            <p className="font-pretendard font-normal text-primary-default text-xl">광고주라면?</p>
          </Button>
          <Button className="bg-primary-100 px-8 py-3 rounded-[56px] hover:bg-[#E6FBFB] hover:shadow-md">
            <p className="font-pretendard font-normal text-primary-default text-xl">인플루언서라면?</p>
          </Button>
        </div>
      </div>
    </header>
  )
}
export default PcHeader
