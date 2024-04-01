import Image from "next/image"
import NavBar from "../navbar/navbar"

const Hero = () => {
    return (
        <div>
            <div className="h-[800px] bg-cover bg-[url('/images/hero_image.png')] z-0">
                <div className="z-10 flex flex-col space-y-2">
                    <NavBar />

                    <div className="flex flex-row">
                        <div className="w-8 h-[502px] flex-col justify-center items-center gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-4 flex pl-24">
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                                <div className="p-2 bg-lime-950 bg-opacity-60 rounded-[90px] border border-neutral-500 backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
                                    <div className="w-4 h-4 relative" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center spacing-y-4 text-center w-7/12 mx-auto text-vivd-lime-green-10">
                            <div className='font-gameria text-6xl'>DECENTRALISED</div>
                            <div className='font-gameria text-6xl'>GAMING</div>
                            <div>A revolution in digital ownership and gaming democracy, poised to lead the GameFi space on Solana. An addictive multiplayer Kill-to-Earn shooter game that offers a unique blend of combat and strategy in a decentralised world.</div>

                            <div className="flex flex-row space-x-4 mt-8">
                                <button className='bg-vivd-lime-green px-6 py-2 shadow-sm rounded-lg shadow-white'>
                                    Airdrop
                                </button>

                                <button className='px-6 py-2 border border-vivd-lime-green rounded-lg text-vivd-lime-green-10'>
                                    Airdrop
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero