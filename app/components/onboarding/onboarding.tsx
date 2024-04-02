import Image from "next/image"

const Onboarding = () => {
    return (
       <div className="flex flex-row items-center justify-center">
         <div className="flex flex-col space-y-8 justify-center items-start mt-24">
            <div className="flex flex-col items-start justify-start text-start">
                <div className='font-gameria text-vivd-lime-green-10 text-[32px] w-[468px]'>
                    ONBOARDING MILLIONS,
                    REDEFINING GAMING
                </div>

                <div className='font-sans text-vivd-lime-green-10 text-[14px] w-[504px] text-s'>
                    Pump Militia is on a mission to bridge the gap between traditional gaming (Web2) and the decentralised future of gaming (Web3), aiming to onboard the next million players into the world of blockchain gaming
                </div>
            </div>

            <div className="flex flex-row space-x-32">
                <Image
                    className="rounded-3xl border-1 border-lime-400"
                    src={'/svg/onboarding.svg'}
                    width={546}
                    height={80}
                    priority
                    alt="" />

                <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <div className='font-gameria text-vivd-lime-green-10 text-[52px]'>
                        15,752
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                        TOTAL DOWNLOADS
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='font-gameria text-vivd-lime-green-10 text-[52px]'>
                        15,752
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                        TOTAL DOWNLOADS
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='font-gameria text-vivd-lime-green-10 text-[52px]'>
                        15,752
                    </div>

                    <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                        TOTAL DOWNLOADS
                    </div>
                </div>
                </div>
                

            </div>
        </div>
       </div>
    )
}

export default Onboarding