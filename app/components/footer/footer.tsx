import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"


const Footer = () => {
    return (
        <footer className="bg-cover bg-no-repeat bg-[url('/images/footer.png')] pt-24 pb-4">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row justify-between items-start mx-24">
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-row items-center">
                            <Image
                                src={AppImages.navBarLogo}
                                width={95}
                                height={95}
                                alt=""
                                priority />


                            <div className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                                PUMP MILLITIA
                            </div>
                        </div>

                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-row justify-start items-start">


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

                            </div>

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
                        </div>
                    </div>

                    <div className="flex flex-row space-x-8">
                        <div className="flex flex-col space-y-6">
                            <div className='font-sans text-vivd-lime-green-10 text-lg'>
                                Pump Millitia
                            </div>

                            <div className="flex-flex-col space-y-4">
                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Airdrop
                                </div>

                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Whitepaper
                                </div>

                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Presale
                                </div>

                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Roadmap
                                </div>

                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Quest
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-6">
                            <div className='font-sans text-vivd-lime-green-10 text-lg'>
                                Legal
                            </div>

                            <div className="flex-flex-col space-y-4">
                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Privacy Policy
                                </div>

                                <div className='font-sans text-vivd-lime-green-10 text-sm'>
                                    Terms of Use
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-[#52594B] mx-24"></div>

                <div className='font-sans text-vivd-lime-green-10 text-sm text-center'>
                    All rights reserved, ©2024. Brought to you by Pump Millitia.
                </div>
            </div>
        </footer>
    )
}

export default Footer