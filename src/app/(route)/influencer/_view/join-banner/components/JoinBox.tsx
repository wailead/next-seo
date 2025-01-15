import AppStoreButtons from './app-store-buttons'

function JoinBox() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-[10px] mobile:gap-[20px]">
      <h2 className="text-gray-600 font-bold text-[6vw] mobile:text-[3.5vw] inline-block primary:text-[26px]">
        와이리 가입하기
      </h2>
      <AppStoreButtons flexCol="flex-col" />
    </div>
  )
}

export default JoinBox
