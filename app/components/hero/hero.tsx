import Image from "next/image"
import NavBar from "../navbar/navbar"

const Hero = () => {
    return (
        <div>
            <div className="h-[800px] bg-cover bg-[url('/images/hero_image.png')] z-0">
                <div className="z-10 flex flex-col space-y-8">
                    <NavBar />

                    <div className="flex flex-row">
                        <div className="w-8 h-[502px] flex-col justify-center items-center gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-4 flex pl-24 pt-24">
                                <Image
                                    className="justify-center items-center inline-flex max-w-[30px] max-h-[70px]"
                                    src={'/svg/vert_border.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/twitter.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/telegram.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/discord.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/tiktok.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/youtube.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                    src={'/svg/medium.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />

                                <Image
                                    className="justify-center items-center inline-flex max-w-[30px] max-h-[70px]"
                                    src={'/svg/vert_border.svg'}
                                    width={32}
                                    height={32}
                                    priority
                                    alt="" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center spacing-y-8 text-center w-7/12 mx-auto text-vivd-lime-green-10">
                            <div className="flex flex-col space-y-2 justify-center items-center">
                                <div className="w-[315px] h-6 px-4 bg-gradient-to-r from-lime-200 via-green-600 to-lime-400 rounded-2xl justify-center items-center gap-2 inline-flex">
                                    <div className="text-stone-800 text-sm font-medium font-sans leading-none">Onboarding millions, redefining gaming</div>
                                    <Image
                                        src={'/svg/icon_logo.svg'}
                                        width={24}
                                        height={24}
                                        priority
                                        alt="" />
                                </div>

                                <div className='font-gameria text-6xl'>DECENTRALISED</div>
                                <div className='font-gameria text-6xl'>GAMING</div>
                                <div>A revolution in digital ownership and gaming democracy, poised to lead the GameFi space on Solana. An addictive multiplayer Kill-to-Earn shooter game that offers a unique blend of combat and strategy in a decentralised world.</div>

                            </div>
                            <div className="flex flex-row space-x-4 mt-8">
                                <button className='bg-vivd-lime-green px-6 py-2 shadow-sm rounded-lg shadow-white'>
                                    Airdrop
                                </button>

                                <button className='px-6 py-2 border border-vivd-lime-green rounded-lg text-vivd-lime-green-10'>
                                    WhitePaper
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row items-center justify-end relative">
                        <div className="flex flex-row space-x-8">
                            <div className="flex flex-row space-x-4 items-center justify-center">
                                <Image
                                    src={'/svg/play_store.svg'}
                                    width={185}
                                    height={56}
                                    alt="" />

                                <Image
                                    src={'/svg/app_store.svg'}
                                    width={185}
                                    height={56}
                                    alt="" />
                            </div>

                            <div className="  bg-stone-900 bg-opacity-20 rounded-2xl border border-lime-700 border-opacity-50 backdrop-blur-[30px] justify-between items-center gap-[50px] inline-flex">
                                <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="text-lime-100 text-base font-normal font-gameria">AIRDROP - MINE $PUMP</div>
                                    <div className="w-[318px] text-lime-100 text-xs font-normal font-sans leading-none">You can start mining $PUMP tokens on your mobile phones right away. We're opening the doors wide for every crypto enthusiast to join in on the fun and rewards.</div>
                                </div>

                                <div className="flex flex-row relative">
                                    <Image
                                        className="mr-[2px] rounded-r-lg"
                                        src={'/svg/ad.svg'}
                                        width={200}
                                        height={60}
                                        alt="" />

                                    <Image
                                        className="mr-[2px] rounded-r-lg absolute -left-12"
                                        src={'/svg/vec_2.svg'}
                                        width={190}
                                        height={60}
                                        alt="" />
                                </div>
                            </div>

                            <div className="w-[300px]  px-4 py-5 bg-stone-900 bg-opacity-20 rounded-2xl border border-lime-700 border-opacity-50 backdrop-blur-[30px] justify-start items-center gap-[50px] inline-flex z-0">
                                <div className="flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="text-lime-100 text-opacity-40 text-base font-normal font-gameria">presale</div>
                                    <div className="w-[318px] text-lime-100 text-opacity-40 text-xs font-normal font-kanit leading-none">Coming soon!!!</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[43.40px] h-[85px] px-2.5  bg-lime-950 rounded-l-lg shadow border border-lime-600 backdrop-blur-[35.50px] justify-center items-center gap-2.5 inline-flex absolute">
                            <Image
                                className="max-w-[15px] max-h-[15px]"
                                src={'/svg/arrow.svg'}
                                width={15}
                                height={15}
                                alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero