"use client"
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/navbar";
import Image from "next/image";
import '../styles/footer.css';
import CustomInput from "../components/customInput/customInput";


export default function IndexPage() {
  let tasksCount = [
    {
      title: 'connect your wallet',
      image: '/images/deposit/connect.png',
      subtitle: 'ComClick the “Connect” button to connect your Defi walletpleted',
    },
    {
      title: 'Enter Amount',
      image: '/images/deposit/coins.png',
      subtitle: 'Click the “Connect” button to connect your Defi wallet',
    },
  ]

  const [completedTask, setCompletedTask] = useState(false)
  return (
    <div className="bg-cover bg-center overflow-hidden bg-[url('/images/deposit/depbag.png')] md:h-screen w-full">
      <NavBar />
      <div className="pt-60 mb-10 w-11/12 m-auto text-[#EDF9D0] font-kanit">
        <div className="flex flex-row gap-32 items-end">
          <div className="basis-1/2 space-y-4">
            <div className="">
              <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-5 pt-3">
                {tasksCount.map((task, index) => {
                  let gradient = index % 2 != 0 ? 'bg-gradient-to-t md:bg-gradient-to-b' : 'bg-gradient-to-t';
                  return (
                    <div className={`${gradient} basis-1/2 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                      <div key={`${index}-${task}`} className="h-[261px] relative px-[34.7px] py-[13px] w-full text-center space-y-8 md:text-start md:w-full bg-black/80 rounded-3xl">
                        <div className="flex flex-row justify-center md:justify-start">
                          <Image
                            className=""
                            src={task.image}
                            width={80}
                            height={80}
                            priority
                            alt="" />
                        </div>
                        <h4 className="text-[24px] font-gameria font-[500]">{task.title}</h4>
                        <p className="text-[17px]">{task.subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="">
              <div className="bg-gradient-to-t from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
                <div className="md:h-[261px] relative w-full bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
                  <Image
                    className=""
                    src={'/images/deposit/checkmark.png'}
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
          <div className="basis-1/2 relative text-black ">

            <div className="bg-[#D2F189] rounded-2xl h-[485px] space-y-2 p-6">

              <div className="flex flex-row absolute w-full top-[-60px] justify-center">
                <Image
                  className=""
                  src={'/images/deposit/pumpdep.png'}
                  width={299}
                  height={112}
                  priority
                  alt="" />
              </div>
              <div className="w-8/12 m-auto">
                <p className="text-[16px] pt-10 text-center">Simply deposit from your wallet to fund your Pump Militia account and let the fun begin.</p>
              </div>

              <div className="bg-[#20251a] h-[336px] space-y-6 rounded-3xl text-[] p-6">


                <div className="flex flex-row justify-between items-center">
                  <div>
                    <div className="flex flex-row items-center gap-4">
                      <div className="text-[#EDF9D0] text-[16px]">
                        $PUMP
                      </div>
                      <div className="text-[#EDF9D0] font-gameria text-[24px]">
                        MAIN-NET
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#A5E314] font-gameria text-[24px]">099998</span></p>
                    </div>
                  </div>

                  <Image
                    className=""
                    src={'/images/deposit/arrow.png'}
                    width={40}
                    height={40}
                    priority
                    alt="" />

                  <div>
                    <div className="flex flex-row items-center gap-4">
                      <div className="text-[#EDF9D0] text-[16px]">
                        $PUMP
                      </div>
                      <div className="text-[#EDF9D0] font-gameria text-[24px]">
                        IN-GAME
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="text-[#898989] text-[10px]">Balance: <span className="text-[#A5E314] font-gameria text-[24px]">099998</span></p>
                    </div>
                  </div>
                </div>
                <CustomInput
                  addOnStart={<Image
                    className=""
                    src={'/images/deposit/pumpcoin.png'}
                    width={32}
                    height={32}
                    priority
                    alt="" />}
                  type="text"
                  placeholder="Enter amount to deposit"
                />

                <div className="flex flex-row space-x-4 w-full mt-8">
                  <button className="bg-vivd-lime-green w-full component_btn px-6 py-2 shadow-sm rounded-xl shadow-white">
                    Connect
                  </button>

                  <button className="px-6 py-2 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                    Deposit
                  </button>
                </div>

                <button className="px-6 py-3 border w-full component_btn_transparent border-vivd-lime-green rounded-xl text-vivd-lime-green-10">
                  Buy from Raydium
                </button>

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="underBorder "></div>

      <div className='font-sans w-7/12 m-auto text-vivd-lime-green-10 my-5 text-sm text-center'>
        All rights reserved, ©2024. Brought to you by Pump Millitia.
      </div>
    </div>
  )
}
