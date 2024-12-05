import AppStoreButtons from './app-store-buttons'

function JoinBox() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-[20px]">
      <h1 className="text-gray-600 font-bold text-[26px] inline-block">와이리 가입하기</h1>
      <AppStoreButtons />
    </div>
  )
}

export default JoinBox
