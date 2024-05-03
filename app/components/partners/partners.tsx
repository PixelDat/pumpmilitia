import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"
import '../../styles/partners.css';


const Partners = () => {
  return (
    <div className="flex flex-col mx-auto w-full items-center justify-center text-center my-24">
      <div className="flex flex-col space-y-2 md:w-[680px] mb-3">
        <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
          PARTNERS
        </div>

        <div className='font-sans text-vivd-lime-green-10 text-[14px]'>
          Collaborating with the most enthusiastic teams in the industry, ranging from cutting-edge startups to well-established leaders            </div>
      </div>


      <div className="flex md:hidden flex-col space-y-4 items-center">
        <div className="flex flex-row items-center gap-x-4 justify-center">
          <img
            className="partner-images"
            src={AppImages.solana}
            alt="" />

          <img
            className="partner-images"
            src={AppImages.aws}
            alt="" />
        </div>
        <div className="flex flex-row justify-center ">
          <img
            className="partner-images w-1/4 basis-2/4"
            src={AppImages.stripe}
            alt="" />
          <img
            className="partner-images basis-1/4 "
            src={AppImages.circleImage}
            alt="" />
          <img
            className="partner-images shrink basis-1/4"
            width={100}
            src={AppImages.epic}
            alt="" />
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-x-20 w-10/12 m-auto">
          <img
            className="partner-images"

            src={AppImages.galze}
            alt="" />

          <img
            className="partner-images"

            src={AppImages.coinMarket}
            alt="" />
        </div>


        <img
          className="partner-images"
          src={AppImages.google}
          alt="" />
      </div>

      <div className="hidden md:flex flex-col space-y-4 items-center">
        <div className="flex flex-row items-center gap-x-4 justify-center">
          <img
            className="partner-images"
            src={AppImages.solana}
            alt="" />
          <img
            className="partner-images"
            src={AppImages.google}
            alt="" />
          <img
            className="partner-images w-1/4 basis-2/4"
            src={AppImages.stripe}
            alt="" />
          <img
            className="partner-images"
            src={AppImages.aws}
            alt="" />
          <img
            className="partner-images shrink basis-1/4"
            width={100}
            src={AppImages.epic}
            alt="" />
        </div>
        <div className="flex flex-row items-center justify-center ">
          <img
            className="partner-images basis-1/4 "
            src={AppImages.circleImage}
            alt="" />
          <img
            className="partner-images"

            src={AppImages.coinMarket}
            alt="" />
          <img
            className="partner-images"

            src={AppImages.galze}
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners