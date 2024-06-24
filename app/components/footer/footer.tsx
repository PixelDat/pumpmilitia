import { AppImages } from "@/lib/constants/app_images"
import Image from "next/image"
import '../../styles/footer.css';
import { Link } from "react-scroll";



const Footer = () => {
    return (
        <footer className="bg-cover bg-no-repeat bg-[url('/images/footer.png')] pt-24 pb-4">

            <div className="mb-4 md:flex flex-row justify-between w-11/12 md:w-10/12 m-auto">
                <div className="">
                    <div className="md:flex flex-row items-center">
                        <div className=" flex flex-row justify-center md:justify-start items-center">
                            <Image
                                className="object-center"
                                src={AppImages.navBarLogo}
                                width={95}
                                height={95}
                                alt=""
                                priority />
                        </div>

                        <div className='font-gameria text-center md:text-start text-vivd-lime-green-10 text-[32px]'>
                            PUMP MILLITIA
                        </div>
                    </div>

                    <div className="flex mb-4 flex-row md:justify-start justify-center items-start space-x-4">
                        <a href="https://x.com/PumpMilitia" target="_blank">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/twitter.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>
                        <a href="https://t.me/PumpMilitia" target="_blank">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/telegram.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>
                        <a href="https://discord.com/invite/tvZGAP4Qt8" target="_blank">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/discord.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>
                        <a href="https://www.tiktok.com/@pump.militia">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/tiktok.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>
                        <a href=" https://youtube.com/@PumpMilitia" target="_blank">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/youtube.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>
                        <a href="https://medium.com/@pumpmilitia" target="_blank">
                            <Image
                                className="justify-start items-start inline-flex max-w-[32px] max-h-[32px]"
                                src={"/svg/medium.svg"}
                                width={32}
                                height={32}
                                priority
                                alt=""
                            />
                        </a>

                    </div>


                    <div className="hidden md:flex flex-row space-x-4 items-center justify-center">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US"><Image src={"/svg/play_store.svg"} width={185} height={56} alt="" /></a>

                        <Image
                            src={'/svg/app_store.svg'}
                            width={185}
                            height={56}
                            alt="" />
                    </div>
                </div>

                <div className="flex flex-row justify-center space-x-2 md:space-x-8">
                    <div className="flex flex-col space-y-6">
                        <div className='font-kanit text-vivd-lime-green-10 text-[24px]'>
                            Pump Millitia
                        </div>



                        <div className="flex-flex-col space-y-4">
                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                <a href="mailto:contact@pumpmilitia.io"
                                >Contact Us</a>
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                <a href="https://pump-militia.gitbook.io/whitepaper/" target="_blank">Whitepaper</a>
                            </div>

                            {/* <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                <a href="/pre-sale">Presale</a>
                            </div> */}

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                <Link
                                    style={{ cursor: 'pointer' }}
                                    activeClass="active"
                                    to="roadmap"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Roadmap</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  space-y-6">
                        <div className='font-kanit text-vivd-lime-green-10 text-[24px]'>
                            Legal
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Privacy Policy
                            </div>

                            <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                                Terms of Use
                            </div>

                            <div className="md:hidden space-y-4 items-center justify-center">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US"><Image src={"/svg/play_store.svg"} width={185} height={56} alt="" /></a>

                                <Image
                                    src={'/svg/app_store.svg'}
                                    width={185}
                                    height={56}
                                    alt="" />
                            </div>
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