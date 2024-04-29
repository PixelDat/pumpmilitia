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
  let stages = [
    {
      title: 'Private Round 1',
      startDate: '04 April 2024',
      endDate: '30 May 2024',
      tokePrice: '$0.0230',
      minInvestment: '$500',
      hardCap: '$100M',
      maxInvestment: '$500,000'
    },
    {
      title: 'Public Round ',
      startDate: '04 April 2024',
      endDate: '30 May 2024',
      tokePrice: '$0.0230',
      minInvestment: '$500',
      hardCap: '$100M',
      maxInvestment: '$500,000'
    },
    {
      title: 'Public Round 2',
      startDate: '04 April 2024',
      endDate: '30 May 2024',
      tokePrice: '$0.0230',
      minInvestment: '$500',
      hardCap: '$100M',
      maxInvestment: '$500,000'
    },
  ]
  let tasksCount = [
    {
      title: 'connect your wallet',
      image: '/images/deposit/connect.png',
      subtitle: 'Click the “Connect” button to connect your Defi walletpleted',
    },
    {
      title: 'Select Payment Method',
      image: '/images/deposit/coins.png',
      subtitle: 'Select your method of purchase (SOL, ETH, BNB) and input the amount',
    },
    {
      title: 'Confirm and complete purchase',
      image: '/images/deposit/checkmark.png',
      subtitle: 'Click “Buy Now” button and accept/approve transaction in your wallet.',
    },
  ]

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
      {/* Instructions on how to buy it */}
      <div className="bg-[#20251a] py-10 pb-40">
        <div className="w-10/12 text-[#EDF9D0] flex flex-row gap-x-2 items-start m-auto ">

          <div className="boderToken">
            <div className="flex flex-col px-4  md:px-10 relative space-y-4">
              <div className='font-gameria leading-[50px] text-[#EDF9D0] text-[56px]'>
                <Image
                  className=""
                  src={'/images/presale/howtobuy.png'}
                  width={163}
                  height={112}
                  priority
                  alt="" />
              </div>
              <div className='font-kanit text-vivd-lime-green-10 text-[16px]'>
                Easy four steps to purchasing $Pump
              </div>
            </div>
          </div>

          <div className="basis-1/2 order-2 md:order-1 space-y-4">
            <div className="">
              <div className="flex gap-y-5 flex-row gap-x-5 pt-3">
                {tasksCount.map((task, index) => {
                  let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                  return (
                    <div className={`${gradient} basis-1/2 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                      <div key={`${index}-${task}`} className="h-[281px] w-[284px] relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] w-full space-y-2 text-start  bg-black/80 rounded-3xl">
                        <div className="flex flex-row justify-center md:justify-start">
                          <Image
                            className=""
                            src={task.image}
                            width={80}
                            height={80}
                            priority
                            alt="" />
                        </div>
                        <h4 className="text-[14px] md:text-[24px] w-full font-gameria font-[500]">{task.title}</h4>
                        <p className="text-[12px] md:text-[16px]">{task.subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="">
              <div className="bg-gradient-to-t from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
                <div className=" relative overflow-hidden h-[229px] w-full bg-black/70 px-[24.8px]  rounded-3xl">
                  <Image
                    style={{ zIndex: 0 }}
                    className="absolute top-[-10px] right-0"
                    src={'/images/presale/sketch.png'}
                    width={650}
                    height={400}
                    priority
                    alt="" />
                  <div style={{ zIndex: 14 }} className="py-3 absolute h-full w-full bg-gradient-to-r from-[#161a13]/60 to-black/10">
                    <Image
                      className=""
                      src={'/images/presale/menu.png'}
                      width={80}
                      height={80}
                      priority
                      alt="" />
                    <p className="text-[15px] font-[300]">Your balance today</p>
                    <h4 className="text-[24px] font-gameria font-[500]">CONFIRM AND COMPLETE PURCHASE</h4>
                    <p className="text-[15px] font-[300]">Click “Deposit” button and accept/approve transaction in your wallet. Wait for deposit to process</p>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Stages */}
      <div className="m-auto bg-[#20251a] ">
        <div className="topBorder  text-[#EDF9D0] relative">
          <div className="w-full m-auto top-[-70px] absolute justify-center items-center flex">
            <Image
              className=""
              src={'/images/presale/salestage.png'}
              width={273}
              height={112}
              priority
              alt="" />
          </div>

          <div className="w-10/12 m-auto pt-20">
            <div className="text-center">
              <p>Join now and secure your stake early in the Pump Militia project.</p>
            </div>

            <div className="grid grid-cols-3 divide-x">
              {stages.map((task, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-l md:bg-gradient-to-b' : 'bg-gradient-to-r md:bg-gradient-to-t';
                return (
                  <div className={`${gradient} basis-1/2 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                    <div key={`${index}-${task}`} className="h-[281px] w-[324px] relative px-[10px] md:px-[34.7px] py-[10px] md:py-[13px] w-full space-y-2 text-start  bg-black/80 rounded-3xl">
                      <h4 className="text-[14px] md:text-[24px] w-full font-gameria font-[500]">{task.title}</h4>
                      <p className="text-[12px] md:text-[16px]">{task.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Tokenomics />
      <Faqs />
      <Footer />
    </div>
  )
}
