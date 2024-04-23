"use client"
import { useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { Avatar } from "@mui/material";
import Image from "next/image";
import CustomInput from "../components/customInput/customInput";
import { People, Person, Person2Rounded } from "@mui/icons-material";

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
    <div className="bg-cover bg-center overflow-hidden bg-[url('/images/deposit/depbag.png')] h-screen w-full">
      <NavBar />
      <div className="pt-64 w-11/12 m-auto text-[#EDF9D0] font-kanit">
        <div className="flex flex-row gap-8 items-end">
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
          <div className="basis-1/2 relative text-black">

            <div className="bg-[#D2F189] rounded-2xl h-[485px] p-4">

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

              <div className="bg-[#20251a]">

              </div>
            </div>
          </div>

        </div>

      </div>
      {/* <Faqs /> */}
      {/* <Footer /> */}
    </div>
  )
}
