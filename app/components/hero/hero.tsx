import Image from "next/image";
import NavBar from "../navbar/navbar";
import '../../styles/hero.css';
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="sm:pb-10 md:pb-20 overflow-hidden bg-cover z-0">
        <video id="background-video"
          controls={true}
          muted={true}
          autoPlay={true}
          loop={true}
          src={`/video/pump.mp4`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
          }}>
        </video>
        <div className="hero-overlay"></div>
        <div className="z-10 flex flex-col space-y-8 relative">
          <NavBar />
          <div className="flex flex-row">
            {/* Social Icons */}
            <div className="w-8 socialsItems h-[502px] pt-[50px] flex-col justify-center items-center gap-4 hidden md:inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex pl-24 pt-24">
                <Image
                  className="justify-center items-center inline-flex max-w-[30px] max-h-[90px]"
                  src={"/svg/vert_border.svg"}
                  width={32}
                  height={40}
                  priority
                  alt=""
                />
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
                <a href="#">
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

                <Image
                  className="justify-center items-center inline-flex max-w-[30px] max-h-[70px]"
                  src={"/svg/vert_border.svg"}
                  width={32}
                  height={32}
                  priority
                  alt=""
                />

              </div>
            </div>
            <div className="flex  pt-[50px]  sm:pt-[100px] md:pt-[100px] pb-[20px]  flex-col justify-center items-center spacing-y-8 text-center sm:w-10/12 md:w-7/12 mx-auto text-vivd-lime-green-10">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <div className="w-[315px] h-6 px-4 bg-gradient-to-r from-lime-200 via-green-600 to-lime-400 rounded-2xl justify-center items-center gap-2 inline-flex">
                  <div className="text-stone-800 text-sm font-medium font-sans leading-none">
                    Onboarding millions, redefining gaming
                  </div>
                  <Image
                    src={"/svg/icon_logo.svg"}
                    width={24}
                    height={24}
                    priority
                    alt=""
                  />
                </div>

                <div className="font-gameria text-[40px] md:text-[80px]">DECENTRALISED GAMING</div>
                <div className="text-[14px] md:text-[16px]  leading-loose md:leading-tight">
                  A revolution in digital ownership and gaming democracy, poised
                  to lead the GameFi space on Solana. An addictive multiplayer
                  Kill-to-Earn shooter game that offers a unique blend of combat
                  and strategy in a decentralised world.
                </div>
              </div>
              <div className="flex flex-row space-x-4 mt-8">
                <button className="bg-vivd-lime-green component_btn px-6 py-2 shadow-sm rounded-lg shadow-white">
                  Airdrop
                </button>

                <button className="px-6 py-2 border component_btn_transparent border-vivd-lime-green rounded-lg text-vivd-lime-green-10">
                  WhitePaper
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons on small screens */}
          <div className="flex-row bg-stone-900 bg-opacity-70 py-2 md:hidden justify-center items-center gap-4 flex ">
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
            <a href="#">
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
          {/* Last slide Items */}
          <div className="flex flex-col md:flex-row items-center justify-end md:gap-4">
            {/* Stores Icons */}

            <div className="flex basis-1/3 flex-row  mb-3 md:mb-0 justify-center items-center gap-2">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US">
                <Image src={"/svg/play_store.svg"} width={185} height={56} alt="" />
              </a>
              <Image
                src={"/svg/app_store.svg"}
                width={185}
                height={56}
                alt=""
              />
            </div>
            {/* Iterable but just two items here */}
            <div className="flex basis-2/3 flex-row overflow-scroll w-full md:w-50 carouselScroll items-center justify-start md:justify-end p-1 gap-4">

              {/* Airdrop Mine Pump */}
              <div className="inline-flex bg-stone-900 bg-opacity-50  rounded-2xl border border-lime-700 border-opacity-50 backdrop-blur-[30px] justify-between items-center gap-[50px]">
                <div className="px-4 py-2 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-lime-100 text-base font-normal font-gameria">
                    AIRDROP - MINE $PUMP
                  </div>
                  <div className="w-[318px] text-lime-100 text-xs font-normal font-sans leading-none">
                    You can start mining $PUMP tokens on your mobile phones
                    right away. We're opening the doors wide for every crypto
                    enthusiast to join in on the fun and rewards.
                  </div>
                </div>

                <div className="flex flex-row relative">
                  <Image
                    className="mr-[2px] rounded-r-lg"
                    src={"/svg/ad.svg"}
                    width={200}
                    height={60}
                    alt=""
                  />

                  <Image
                    className="mr-[2px] rounded-r-lg absolute -left-12"
                    src={"/svg/vec_2.svg"}
                    width={190}
                    height={60}
                    alt=""
                  />
                </div>
              </div>
              {/* presale-item */}
              <div id="presaleItem" className="w-[300px]  px-4 py-5 bg-stone-900 bg-opacity-50 rounded-2xl border border-lime-700 border-opacity-50 backdrop-blur-[30px] justify-start items-center gap-[50px] z-0">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-lime-100 text-opacity-40 text-base font-normal font-gameria">
                    presale
                  </div>
                  <div className="w-[318px] text-lime-100 text-opacity-40 text-xs font-normal font-kanit leading-none">
                    Coming soon!!!
                  </div>
                </div>
              </div>
              <Link to="presaleItem"
                spy={true}
                smooth={true}
                offset={0}
                duration={500} style={{ position: 'absolute', right: '0px', }} className="w-[43.40px] h-[85px] px-2.5  bg-lime-950 rounded-l-lg shadow border border-lime-600 backdrop-blur-[35.50px] justify-end items-center gap-2.5 inline-flex">
                <Image
                  className="max-w-[15px] max-h-[15px]"
                  src={"/svg/arrow.svg"}
                  width={15}
                  height={15}
                  alt=""
                />

              </Link>
            </div>

          </div>


        </div>
      </div>
    </div >
  );
};

export default Hero;
