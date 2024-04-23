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

  let tasks = [
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    },
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    },
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    },
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    },
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    },
    {
      image: '/images/tasksItem.png',
      title: 'Follow @PUMPMILITIA ON',
      icon: '/images/xicon.png',
      reward: '100',
    }
  ]
  const [completedTask, setCompletedTask] = useState(false)
  return (
    <div className="bg-cover bg-center overflow-hidden bg-[url('/images/deposit/depbag.png')] h-screen w-full">
      <NavBar />
      <div className="pt-28 w-11/12 m-auto text-[#EDF9D0] font-kanit">

        {/* Dashboard Items */}
        <div className="md:flex  md:flex-row  md:gap-x-14 px-4 md:w-11/12 m-auto  pb-20  items-start justify-between">
          <div className="basis-1/4">
            <div >
              <h1 className="font-gameria text-[32px] mb-[24px]">$PUMP BALANCE</h1>
            </div>

            <div className="bg-gradient-to-r from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
              <div className="md:h-[261px] relative w-full md:w-[411px] bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
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
            <h1 className="font-gameria text-[24px] mb-[24px] text-start md:text-start">YOUR TASK</h1>
            <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-5 pt-3">
              {tasksCount.map((task, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-t md:bg-gradient-to-b' : 'bg-gradient-to-t';
                return (
                  <div className={`${gradient} basis-1/3 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                    <div key={`${index}-${task}`} className="h-[261px] relative px-[34.7px] py-[13px] w-full text-center md:text-start md:w-full bg-black/80 rounded-3xl">
                      <h4 className="text-[45px] font-[500]">{task.number}</h4>
                      <p className="text-[17px]">{task.status}</p>
                      <div className="flex flex-row justify-center md:justify-start">
                        <Image
                          className="absolute bottom-[10px]"
                          src={task.image}
                          width={100}
                          height={100}
                          priority
                          alt="" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
      {/* <Faqs /> */}
      {/* <Footer /> */}
    </div>
  )
}
