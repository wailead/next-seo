import CustomImage from '@/components/custom-image/CustomImage'

function QrCode() {
  return (
    <div className="flex primary:gap-[0.875rem] gap-[1.86vw] primary:pl-3.5 pl-[1.86vw]">
      <div className="flex flex-col bg-white-default primary:p-[0.869rem] p-[1.86vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
        <CustomImage
          src="/assets/images/qr_appstore.png"
          alt="appleQR"
          w="primary:w-[5rem] w-[10.66vw]"
          h="primary:h-[5rem] h-[10.66vw]"
        />
        <div className="flex items-center primary:gap-[0.313rem] gap-[0.66vw]  ">
          <CustomImage
            src={'/assets/icons/gray_apple.svg'}
            alt="applelogo"
            w="primary:w-[0.75rem] w-[1.6vw]"
            h="primary:h-[0.75rem] h-[1.6vw]"
          />
          <span className="font-normal primary:text-[0.588rem] text-[1.25vw] primary:leading-[0.688rem] leading-[1.47vw]">
            APP Store
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-white-default primary:p-[0.869rem] p-[1.86vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-2xl shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
        <CustomImage
          src="/assets/images/qr_playstore.png"
          alt="googleQR"
          w="primary:w-[5rem] w-[10.66vw]"
          h="primary:h-[5rem] h-[10.66vw]"
        />
        <div className="flex items-center  primary:gap-[0.313rem] gap-[0.66vw] ">
          <CustomImage
            src={'/assets/icons/gray_google.svg'}
            alt="applelogo"
            w="primary:w-[0.75rem] w-[1.6vw]"
            h="primary:h-[0.75rem] h-[1.6vw]"
          />
          <span className="font-normal primary:text-[0.588rem] text-[1.25vw] primary:leading-[0.688rem] leading-[1.47vw]">
            Google Play
          </span>
        </div>
      </div>
    </div>
  )
}
export default QrCode
