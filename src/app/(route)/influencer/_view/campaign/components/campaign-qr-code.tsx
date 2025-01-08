import CustomImage from '@/components/custom-image/CustomImage'

function CampaignQrCode() {
  return (
    <div className="flex primary:gap-[0.9rem] gap-[1.92vw] primary:pt-[3.625rem] pt-[7.73vw]">
      <div className="flex flex-col bg-white-default primary:px-[0.96875rem] px-[2.07vw] primary:py-[1rem]  py-[2.13vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
        <CustomImage
          src="/images/qr_appstore.png"
          alt="appleQR"
          w="primary:w-[5.5625rem] w-[11.87vw]"
          h="primary:h-[5.5625rem] h-[11.87vw]"
        />
        <div className="flex items-center primary:gap-[0.438rem] gap-[0.93vw]">
          <CustomImage
            src={'/icons/gray_apple.svg'}
            alt="applelogo"
            w="primary:w-[0.78125rem] w-[1.67vw]"
            h="primary:h-[0.78125rem] h-[1.67vw]"
          />
          <span className="font-normal primary:text-[0.625rem] text-[1.33vw] primary:leading-[0.5rem] leading-[1.07vw]">
            APP Store
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-white-default primary:px-[0.96875rem] px-[2.07vw] primary:py-[1rem]  py-[2.13vw] justify-center items-center primary:gap-[0.625rem] gap-[1.33vw] rounded-[1.125rem] shadow-[0_4px_10px_-3px_rgba(0,0,0,0.4)]">
        <CustomImage
          src="/images/qr_playstore.png"
          alt="googleQR"
          w="primary:w-[5.5625rem] w-[11.87vw]"
          h="primary:h-[5.5625rem] h-[11.87vw]"
        />
        <div className="flex items-center primary:gap-[0.438rem] gap-[0.93vw]">
          <CustomImage
            src={'/icons/gray_google.svg'}
            alt="applelogo"
            w="primary:w-[0.8125rem] w-[1.73vw]"
            h="primary:h-[0.8125rem] w-[1.73vw]"
          />
          <span className="font-normal primary:text-[0.625rem] text-[1.33vw] primary:leading-[0.5rem] leading-[1.07vw]">
            Google Play
          </span>
        </div>
      </div>
    </div>
  )
}
export default CampaignQrCode
