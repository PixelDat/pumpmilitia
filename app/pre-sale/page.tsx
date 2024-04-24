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

            <div className="w-10/12 m-auto pt-36">
              <div className="border pt-20 px-5 pb-10 relative bg-[#10130DB2] font-kanit text-[#EDF9D0] rounded-2xl ">

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
                <div className="flex flex-row justify-between gap-14 items-center">
                  <div className="basis-1/2 rounded-2xl p-4 h-[383px] border bg-[#282F20E9] presaleGradient">
                    <div className="flex flex-row items-center justify-between">
                      <p>Presale Progress</p>
                      <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#C3EC62]">Private Round</p>
                      <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                    </div>
                    {/* Rectangle */}
                    <div className="bg-[#374C07] my-4 h-[4px] rounded-full w-full">
                      <div className="bg-[#A5E314] rounded-full h-[4px] w-[192px]">

                      </div>
                      <div className="bg-[#A5E314] relative top-[-12px] left-[192px] h-[20px] rounded-full border w-[20px]">

                      </div>
                    </div>

                    <div className="space-y-2 mb-5">
                      <p>Purchased $PUMP Balance</p>
                      <p className="font-gameria font-300 text-[48px]">$0.0089</p>
                      <p>One token, Endless possibilities. Purchased token would be available for claim at TGE.</p>
                      <div className="flex flex-row ">
                        <p><span>Starts:</span>  15/05/2024 (12:00 UTC)</p>
                        <p><span>Ends:</span> 16/05/2024 (12:00 UTC)</p>
                      </div>
                    </div>

                    {/* Social Icons and Total Prices  */}
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
                    <div>

                    </div>

                    <div className="basis-1/2 rounded-2xl p-4 h-[383px] border bg-[#282F20E9] presaleGradient">
                      <div className="flex flex-row items-center justify-between">
                        <p>Presale Progress</p>
                        <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <p className="text-[#C3EC62]">Private Round</p>
                        <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                      </div>

                      <div className="bg-[#374C07] my-4 h-[4px] w-full">
                        <div className="bg-[#A5E314] h-[4px] w-[192px]">

                        </div>
                        <div className="bg-[#A5E314] relative top-[-12px] left-[192px] h-[20px] rounded-full border w-[20px]">

                        </div>
                      </div>

                      <div className="space-y-2 mb-5">
                        <p>Purchased $PUMP Balance</p>
                        <p className="font-gameria font-300 text-[48px]">$0.0089</p>
                        <p>One token, Endless possibilities. Purchased token would be available for claim at TGE.</p>
                        <div className="flex flex-row ">
                          <p><span>Starts:</span>  15/05/2024 (12:00 UTC)</p>
                          <p><span>Ends:</span> 16/05/2024 (12:00 UTC)</p>
                        </div>
                      </div>

                      {/* Social Icons and Total Prices  */}
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
