import Link from 'next/link'
import CustomImage from '../custom-image/CustomImage'

function ChatBot() {
  return (
    <div className="sticky right-0 bottom-0 z-[9999]">
      <div className="absolute right-[24px] bottom-[24px] z-20">
        <Link href="https://2k044.channel.io/user-chats/" aria-label="와이리 챗봇 바로가기" target="_blank">
          <div className="flex w-[56px] h-[56px] bg-[#367BA2] rounded-[24px] shadow-[0_5px_4px_0px_rgba(0,0,0,0.17)] hover:shadow-[0_5px_7px_0px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_0px_rgba(0,0,0,0.27)]  justify-center items-center pr-[1.5px] pb-[1.5px]">
            <CustomImage
              src={'/assets/icons/chat_bot.svg'}
              alt="close"
              w="w-[30.5px]"
              h="h-[30.5px]"
              loading="lazy"
              quality={75}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default ChatBot
