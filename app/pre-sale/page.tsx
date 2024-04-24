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
import TimerCount from "../components/timerComponent/timer";
import CustomInput from "../components/customInput/customInput";

export default function Presale() {
  return (

    <div className="bg-cover bg-[url('/images/background.png')] h-full w-full">

      <div>
        <div className="sm:pb-10 md:pb-20  overflow-hidden bg-cover bg-[url('/images/presale/presalebg.png')] md:bg-[url('/images/presale/presalebg.png')] z-0">
          <div className="z-10 flex flex-col space-y-8 relative">
            <NavBar />

            <div className="w-full md:w-10/12 m-auto pt-36">
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
                <div className="flex flex-col md:flex-row justify-between gap-14 md:items-end">
                  <div className="basis-1/2  order-2 md:order-1 rounded-2xl p-4 md:h-[383px] border bg-[#282F20E9] presaleGradient">
                    <div className="flex flex-row items-center justify-between">
                      <p>Presale Progress</p>
                      <p>Raised <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-[#C3EC62]">Private Round</p>
                      <p>Hard Cap <span className="text-[#C3EC62] text-[24px] font-gameria">$100M</span></p>
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
                      <div className="flex flex-col md:flex-row ">
                        <p><span className="text-[#C3EC62]">Starts:</span>  15/05/2024 (12:00 UTC)</p>
                        <p><span className="text-[#C3EC62]">Ends:</span> 16/05/2024 (12:00 UTC)</p>
                      </div>
                    </div>

                    {/* Social Icons and Total Prices  */}
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex order-2 md:order-1 mb-4 flex-row justify-start  items-start space-x-4">
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

                      <div className="order-1 md:order-2 mb-3 md:mb-0">
                        <p>Token Prices: <span className="text-[#C3EC62] text-[24px] font-gameria">$0.0051</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2 order-1 md:order-2">
                    <div>
                      <TimerCount />

                    </div>
                    <div className="basis-1/2 rounded-2xl p-4 md:h-[316px] border bg-[#282F20E9] presaleGradient">
                      <div className="flex flex-row items-center justify-between">
                        <p>Pay with <span className="text-[#C3EC62] text-[24px] font-gameria mx-3">SOL</span> <span className="text-[#757A6F] text-[10px]">  Min buy 0.6</span></p>
                        <p>Receive <span className="text-[#C3EC62] text-[24px] font-gameria">$PUMP</span></p>
                      </div>

                      <div className="space-y-8 mb-5">
                        <div className="flex flex-col md:flex-row gap-4">
                          <CustomInput
                            className=""
                            sx={{ marginBottom: '10px' }}
                            placeholder="Enter Amount"
                            type="text"
                            addOnStart={<Image
                              className=""
                              src={'/images/presale/protocol.png'}
                              width={24}
                              height={24}
                              priority
                              alt="" />}
                          />
                          <CustomInput
                            className=""
                            // onChange={(e) => setPassword(e.target.value)}
                            sx={{ marginBottom: '10px' }}
                            placeholder="PUMP you'd receive"
                            type="text"
                            addOnStart={<Image
                              className=""
                              src={'/images/presale/pumplogo.png'}
                              width={24}
                              height={24}
                              priority
                              alt="" />}
                          />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                          <button className="bg-vivd-lime-green w-full component_btn px-6 py-3 shadow-sm rounded-xl shadow-white">
                            Connect Wallet
                          </button>

                          <button className="px-6 py-3 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                            Buy now
                          </button>
                        </div>

                        <button className="px-6 py-3 font-gameria border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                          Whitelist Status
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div >
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  )
}
