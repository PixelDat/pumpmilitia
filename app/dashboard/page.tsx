"use client"
import { useEffect } from "react";
import Hero from "../components/hero/hero";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { Avatar } from "@mui/material";
import Image from "next/image";

export default function IndexPage() {
  let tasksCount = [
    {
      number: 120,
      image: '/svg/roadmap_1.svg',
      status: 'Completed',
      iconType: 'light',
    },
    {
      number: 0,
      image: '/svg/roadmap_2.svg',
      status: 'Uncompleted',
      iconType: 'light',
    },
    {
      number: 110,
      image: '/svg/roadmap_3.svg',
      status: 'Total',
      iconType: 'light',
    },

  ]
  return (
    <div className="bg-cover bg-[url('/images/dashboardbg.png')] h-full w-full">
      <NavBar />
      <div className="pt-28 text-[#EDF9D0] font-kanit">
        {/* Dashboard airdrop and avatar */}
        <div className="p-20 ">
          <div className="flex flex-row justify-between items-center">
            <div >
              <h1 className="font-gameria text-[52px]">AIRDROP QUESTS</h1>
            </div>
            <div className="flex flex-row items-center gap-x-4" >
              <div>
                <p>David Johnson</p>
                <p className="text-[12px]">@johnson_1002</p>
              </div>
              <Avatar
                sx={{ width: 62, height: 62 }}
                src="/images/profileImg.png"
              />
            </div>
          </div>
          <p className="text-[16px]">Complete simple missions and get rewarded in $PUMP. Own a slice of the ecosystem.</p>
        </div>

        {/* Dashboard Items */}
        <div className="flex flex-row  gap-x-14 px-20 pb-20  items-start justify-between">
          <div className="basis-1/4">
            <div >
              <h1 className="font-gameria text-[32px] mb-[24px]">$PUMP BALANCE</h1>
            </div>

            <div className="bg-gradient-to-r from-[#A5E314]/50 to-black   p-0.5 rounded-3xl">
              <div className="h-[261px] relative w-[411px] bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
                <p className="text-[15px] font-[300]">Your balance today</p>
                <h4 className="text-[45px] font-gameria font-[500]">22,550,200</h4>
                <Image
                  className="absolute top-[10px] right-[20px]"
                  src={'/images/coins.png'}
                  width={80}
                  height={80}
                  priority
                  alt="" />

                <div>
                  <a href="/withdraw" className="navbar-auth-btn">Withdraw</a>
                </div>

                <p className="text-[15px] font-[300]">Claim or stake tokens at TGE</p>

              </div>
            </div>

          </div>
          <div className="basis-3/4">
            <h1 className="font-gameria text-[24px] mb-[24px] text-start">YOUR TASK</h1>
            <div className="flex flex-row gap-x-14 pt-3">
              {tasksCount.map((task, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-b' : 'bg-gradient-to-t';
                return (
                  <div className={`${gradient} from-[#A5E314]/50 to-black   p-0.5 rounded-3xl`}>
                    <div key={`${index}-${task}`} className="h-[261px] px-[34.7px] py-[13px] w-[231px] bg-black/80 rounded-3xl">
                      <h4 className="text-[45px] font-[500]">{task.number}</h4>
                      <p className="text-[17px]">{task.status}</p>
                      <Image
                        className="absolute bottom-[126px]"
                        src={task.image}
                        width={100}
                        height={100}
                        priority
                        alt="" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
      <Faqs />
      <Footer />
    </div>
  )
}
