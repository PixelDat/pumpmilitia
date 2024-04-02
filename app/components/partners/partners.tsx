import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"

const Partners = () => {
  return (
    <div className="flex flex-col mx-auto w-7/12 items-center justify-center text-center my-24">
      <div className="flex flex-col space-y-2">
        <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
          PARTNERS
        </div>

        <div className='font-sans text-vivd-lime-green-10 text-[14px]'>
          Collaborating with the most enthusiastic teams in the industry, ranging from cutting-edge startups to well-established leaders            </div>
      </div>


     <div className="flex flex-col">
     <div className="flex flex-row items-center justify-center space-x-6">
        <Image
          className="max-h-[36px]"
          src={AppImages.solana}
          width={175}
          height={36}
          alt=""
          priority />

        <Image
                  className="max-h-[28px]"
          src={AppImages.google}
          width={175}
          height={28}
          alt=""
          priority />

        <Image
                          className="max-h-[48px]"
          src={AppImages.stripe}
          width={175}
          height={48}
          alt=""
          priority />

        <Image
                                  className="max-h-[40px]"
          src={AppImages.aws}
          width={175}
          height={40}
          alt=""
          priority />

        <Image
        
          src={AppImages.epic}
          width={175}
          height={36}
          alt=""
          priority />
      </div>

      <div className="flex flex-row items-center justify-center space-x-6">
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