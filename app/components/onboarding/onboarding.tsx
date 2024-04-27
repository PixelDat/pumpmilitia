import Image from "next/image"
import { useEffect, useState } from "react";

const Onboarding = () => {

    const [t_downloads, setTDownloads] = useState(0);
    const [activePlayer, setActivePlayer] = useState(0);
    const [totalBattles, setTotalBattles] = useState(0);

    function displayVisitCount(finalCount: number) {
        let currentCount = 0;
        const interval = 1;

        const timer = setInterval(() => {
            if (currentCount <= finalCount) {
                setTDownloads(currentCount);
                if (finalCount - currentCount < 100) {
                    currentCount += finalCount - currentCount;
                } else {
                    currentCount += 100;
                }
            } else {
                clearInterval(timer);
            }
        }, interval);
    }
    useEffect(() => {

        const tDownload = 15752;
        const aPlayers = 6521;
        const tBattles = 252733;

        // displayVisitCount(tDownload);
        // displayVisitCount(aPlayers);
        // displayVisitCount(tBattles);

    }, [])

    return (
        <div className="flex flex-row items-center justify-center py-32">


            <div className="">
                <div className="mb-3 p-3 md:p-0">
                    <div className='font-gameria  md:w-[468px]  text-center md:text-start text-vivd-lime-green-10 text-[32px]'>
                        ONBOARDING MILLIONS,
                        REDEFINING GAMING
                    </div>

                    <div className='font-sans text-vivd-lime-green-10  text-[14px] md:w-[504px] text-center md:text-start'>
                        Pump Militia is on a mission to bridge the gap between traditional gaming (Web2) and the decentralised future of gaming (Web3), aiming to onboard the next million players into the world of blockchain gaming
                    </div>

                </div>


                <div className="flex flex-col justify-center  md:flex-row md:space-x-32">
                    <div className="hidden md:flex">

                        <Image
                            className="rounded-3xl border-1 border-lime-400"
                            src={'/svg/onboarding.svg'}
                            width={546}
                            height={320}
                            priority
                            alt="Onboarding" />
                    </div>

                    <div className="md:hidden flex flex-row items-center justify-center">

                        <Image
                            className="rounded-3xl border-1 border-lime-400"
                            src={'/svg/onboarding.svg'}
                            width={321}
                            height={249}
                            priority
                            alt="Onboarding" />
                    </div>

                    <div className="flex flex-wrap gap-x-8 justify-end p-5 md:flex-col md:space-y-4">
                        <div className="flex flex-col">
                            <div className='font-gameria text-end text-vivd-lime-green-10 text-[52px]'>
                                15,752
                            </div>

                            <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                                TOTAL DOWNLOADS
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className='font-gameria text-end text-vivd-lime-green-10 text-[52px]'>
                                6,521
                            </div>

                            <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                                ACTIVE PLAYERS
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className='font-gameria text-end text-vivd-lime-green-10 text-[52px]'>
                                252,773
                            </div>

                            <div className='font-sans text-vivd-lime-green-10 text-sm text-end'>
                                TOTAL BATTLES
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Onboarding