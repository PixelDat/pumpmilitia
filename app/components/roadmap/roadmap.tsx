import Image from "next/image"

const RoadMap = () => {
    return (
        <div className="flex flex-col space-y-24 mt-32 justify-center items-center text-center" id="roadmap">
            <div className="flex flex-col space-y-2">
                <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
                    ROADMAP
                </div>

                <div className='font-sans text-vivd-lime-green-10 text-md'>
                    Four Phases
                </div>
            </div>

          <div className="relative w-full flex justify-center items-center flex-col">
          <div className="border-b border-[#52594B] w-full absolute top-12"></div>

            <div className="flex flex-row justify-between items-center w-8/12 relative">
                <div className="flex flex-col space-y-8">
                    <Image
                        className=""
                        src={'/svg/roadmap_1.svg'}
                        width={100}
                        height={100}
                        priority
                        alt="" />

                    <div className="flex flex-col space-y-2 items-start">
                        <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                            PHASE 1
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Game development
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Marketing stategy
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> White Paper
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Community building
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Tokenomics
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-8">
                    <Image
                        src={'/svg/roadmap_2.svg'}
                        width={100}
                        height={100}
                        priority
                        alt="" />

                    <div className="flex flex-col space-y-2 items-start">
                        <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                            PHASE 2
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Beta version launch
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Airdrop
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Community Growth
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> NFT mints
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Presales
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-8">
                    <Image
                        src={'/svg/roadmap_1.svg'}
                        width={100}
                        height={100}
                        priority
                        alt="" />

                    <div className="flex flex-col space-y-2 items-start">
                        <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                            PHASE 3
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Dex && CEX Listings
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Game Full Launch
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> $PUMP Staking
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> PumpSwap Launch
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Partnerships
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-8">
                    <Image
                        src={'/svg/roadmap_3.svg'}
                        width={100}
                        height={100}
                        priority
                        alt="" />

                    <div className="flex flex-col space-y-2 items-start">
                        <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                            PHASE 4
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> More CEX listings
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Game Upgrades
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Huge Marketing Campaign
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> Partnership with top KOLS
                        </div>

                        <div className='font-sans text-vivd-lime-green-10 text-sm'>
                         <span className="pl-2 font-sans font-extrabold pr-1">·</span> 100,000 daily playes
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
    )
}

export default RoadMap