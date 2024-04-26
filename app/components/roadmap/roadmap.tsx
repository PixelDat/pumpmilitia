import Image from "next/image"

const RoadMap = () => {
    const items = [
        {
            title: 'PHASE 1',
            image: '/svg/roadmap_1.svg',
            listItem: [
                "Game development",
                "Marketing stategy",
                "White Paper",
                "Community building",
                "Tokenomics"
            ]
        },
        {
            title: 'PHASE 2',

            image: '/svg/roadmap_2.svg',

            listItem: [
                "Beta version launch",
                "Airdrop",
                "Community Growth",
                "NFT mints",
                "Presales"
            ]
        },
        {
            title: 'PHASE 3',

            image: '/svg/roadmap_1.svg',

            listItem: [
                "Dex && CEX Listings",
                "Game Full Launch",
                "$PUMP Staking",
                "PumpSwap Launch",
                "Partnerships"
            ]
        },
        {

            title: 'PHASE 4',

            image: '/svg/roadmap_3.svg',

            listItem: [
                "More CEX listings",
                "Game Upgrades",
                "Huge Marketing Campaign",
                "Partnership with top KOLS",
                "100,000 daily playes"
            ]
        },



    ]
    return (
        <div className="flex flex-col space-y-24 md:mt-32 md:mb-20 justify-center items-center text-center" id="roadmap">
            <div className="flex flex-col space-y-2">
                <div className='font-gameria text-vivd-lime-green-10 text-[32px]'>
                    ROADMAP
                </div>

                <div className='font-sans text-vivd-lime-green-10 text-md'>
                    Four Phases
                </div>
            </div>

            <div className="relative w-full flex justify-center items-center flex-col">
                <div className="border-s-3  md:left-0 md:border-b border-[#52594B] h-full md:h-0 md:w-full  absolute md:top-12"></div>

                <div className="flex flex-col md:flex-row mb-10 md:mb-0 md:justify-between md:items-center w-11/12 md:w-8/12 relative">
                    {items.map((item: any, index: number) => {
                        return (
                            <div key={`${index}-${item}`} className="flex flex-row md:flex-col gap-10 md:gap-0 items-center justify-between md:items-start space-y-8">
                                <Image
                                    className="basis-1/4"
                                    src={item.image}
                                    width={100}
                                    height={100}
                                    priority
                                    alt="" />

                                <div className="basis-3/4">
                                    <div className='font-gameria text-start text-vivd-lime-green-10 text-[24px]'>
                                        {item.title}
                                    </div>
                                    {item.listItem.map((list: any, index: number) => {
                                        return (
                                            <div key={`${index}-${list}`} className='font-sans text-start text-vivd-lime-green-10 text-sm'>
                                                <li className="ml-5 font-sans font-bold pr-1"> {list}</li>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        </div>
    )
}

export default RoadMap