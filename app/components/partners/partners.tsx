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


      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-x-20 w-10/12 m-auto">
          <img
            className="partner-images"
            src={AppImages.solana}
            alt="" />

          <img
            className="partner-images"
            src={AppImages.google}
            alt="" />

          <img
            className="partner-images"
            src={AppImages.stripe}
            alt="" />

          <img
            className="partner-images"
            src={AppImages.aws}
            alt="" />

          <img
            className="partner-images"
            src={AppImages.epic}
            alt="" />

          <img
            className="partner-images"

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