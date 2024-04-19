import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"

const Partners = () => {
  return (
    <div className="flex flex-col mx-auto w-full items-center justify-center text-center my-24">
      <div className="flex flex-col space-y-2 w-[680px] mb-3">
        <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
          PARTNERS
        </div>

        <div className='font-sans text-vivd-lime-green-10 text-[14px]'>
          Collaborating with the most enthusiastic teams in the industry, ranging from cutting-edge startups to well-established leaders            </div>
      </div>


      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-x-20 w-full">
          <Image
            className="partner-images"
            src={AppImages.solana}
            width={100}
            height={48}
            alt=""
            priority />

          <Image
            className="partner-images"
            src={AppImages.google}
            width={100}
            height={48}
            alt=""
            priority />

          <Image
            className="partner-images"
            src={AppImages.stripe}
            width={100}
            height={48}
            alt=""
            priority />

          <Image
            className="partner-images"
            src={AppImages.aws}
            width={100}
            height={48}
            alt=""
            priority />

          <Image
            className="partner-images"
            src={AppImages.epic}
            width={100}
            height={48}
            alt=""
            priority />
        </div>
        <div className="flex flex-wrap">
          <Image
            src={AppImages.circleImage}
            width={175}
            height={36}
            alt=""
            priority />

          <Image
            src={AppImages.coinMarket}
            width={175}
            height={36}
            alt=""
            priority />

          <Image
            src={AppImages.galze}
            width={175}
            height={36}
            alt=""
            priority />
        </div>
      </div>
    </div>
  )
}

export default Partners