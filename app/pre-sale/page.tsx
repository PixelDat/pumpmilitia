"use client"
import Hero from "../components/hero/hero";
import Preview from "../components/preview/preview";
import Features from "../components/features/features";
import Partners from "../components/partners/partners";
import MinePump from "../components/mine_pump/minePump";
import RoadMap from "../components/roadmap/roadmap";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import Onboarding from "../components/onboarding/onboarding";
import { useEffect } from "react";
import Tokenomics from "../components/tokenomics/tokennomics";
import CustomButton from "../components/buttons/customButton";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";

export default function Presale() {
  return (

    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">

      <div>
        <div className="sm:pb-10 md:pb-20  overflow-hidden bg-cover bg-[url('/images/presale/presalebg.png')] md:bg-[url('/images/presale/presalebg.png')] z-0">
          <div className="z-10 flex flex-col space-y-8 relative">
            <NavBar />

            <div className="w-10/12 m-auto pt-40">
              <div className="border p-20 relative bg-[#10130DB2] font-kanit text-[#EDF9D0] rounded-2xl h-[541px]">

                <div className="flex flex-row absolute top-[-65px]  w-full justify-center">
                  <Image
                    className="justify-center items-center  inline-flex max-w-[299px] max-h-[112px]"
                    src={"/images/presale/pumppresale.png"}
                    width={299}
                    height={112}
                    priority
                    alt=""
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="basis-1/2 rounded-2xl p-4 h-[383px] presaleGradient">
                    <div className="flex flex-row items-center justify-between">
                      <p>Presale Progress</p>
                      <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#C3EC62]">Private Round</p>
                      <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                    </div>


                    <div className="flex flex-row justify-between">
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

                      <div>
                        <p>Token Prices: <span className="text-[#C3EC62] text-[24px] font-gameria">$0.0051</span></p>

                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">

                  </div>


                </div>
              </div>



            </div>
          </div>
        </div>
      </div >

      {/* <Hero /> */}
      {/* <Preview /> */}
      {/* <MinePump /> */}
      {/* <Features /> */}
      {/* <Onboarding /> */}
      {/* <RoadMap /> */}
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  )
}
