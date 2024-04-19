import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"
import '../../styles/footer.css';



const Footer = () => {
    return (
        <footer className="bg-cover bg-no-repeat bg-[url('/images/footer.png')] pt-24 pb-4">

            <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-10/12 m-auto mb-5">
                <div className="">
                    <div className="flex md:flex-row flex-col md:justify-start justify-center items-center">
                        <Image
                            src={AppImages.navBarLogo}
                            width={95}
                            height={95}
                            alt=""
                            priority />
                        <div className='font-gameria text-center text-vivd-lime-green-10 text-[32px]'>
                            PUMP MILLITIA
                        </div>
                    </div>

                    <div className="">
                        <div className="flex mb-4 flex-row md:justify-start justify-center items-start space-x-4">
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

                        <div className="hidden md:flex flex-row space-x-4 items-center justify-center">
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
                        <div className='font-kanit text-vivd-lime-green-10 text-[24px]'>
                            Pump Millitia
                        </div>

                        <div className="flex-flex-col space-y-4">
                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Airdrop
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Whitepaper
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Presale
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Roadmap
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Quest
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div className='font-kanit text-vivd-lime-green-10 text-[24px]'>
                            Legal
                        </div>

                        <div className="flex-flex-col space-y-4">
                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Privacy Policy
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Terms of Use
                            </div>
                        </div>

                        <div className="md:hidden space-y-4 items-center justify-center">
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
            </div>

            <div className="underBorder "></div>

            <div className='font-sans w-7/12 m-auto text-vivd-lime-green-10 mt-5 text-sm text-center'>
                All rights reserved, ©2024. Brought to you by Pump Millitia.
            </div>
        </footer>
    )
}

export default Footer