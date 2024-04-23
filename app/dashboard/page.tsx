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
    <div className="bg-cover bg-[url('/images/dashboardbg.png')] h-full w-full">
      <NavBar />
      <div className="pt-28 text-[#EDF9D0] font-kanit">
        {/* Dashboard airdrop and avatar */}
        <div className="p-4 md:p-20 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div >
              <h1 className="font-gameria text-center md:text-start text-[52px]">AIRDROP QUESTS</h1>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-start items-center gap-x-4" >
              <div>
                <p>David Johnson</p>
                <p className="text-[12px]">@johnson_1002</p>
              </div>
              <Avatar
                className=""
                sx={{ width: 62, height: 62 }}
                src="/images/profileImg.png"
              />
            </div>
          </div>
          <p className="text-[16px] text-center md:text-start">Complete simple missions and get rewarded in $PUMP. Own a slice of the ecosystem.</p>
        </div>

        {/* Dashboard Items */}
        <div className="md:flex  md:flex-row  md:gap-x-14 px-4 md:px-20  pb-20  items-start justify-between">
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
            <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-14 pt-3">
              {tasksCount.map((task, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-b' : 'bg-gradient-to-t';
                return (
                  <div className={`${gradient} from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                    <div key={`${index}-${task}`} className="h-[261px] relative px-[34.7px] py-[13px] w-full text-center md:text-start md:w-[231px] bg-black/80 rounded-3xl">
                      <h4 className="text-[45px] font-[500]">{task.number}</h4>
                      <p className="text-[17px]">{task.status}</p>
                      <Image
                        className="absolute bottom-[10px]"
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
        {/* Task Feature */}
        <div className="px-3 md:px-20 pb-20">
          <div>
            <h4 className="font-gameria text-[24px] text-center md:text-start mb-3">CHECK FOR NEW TASKS DAILY</h4>
          </div>

          <div className="flex flex-row">
            <div style={{ cursor: 'pointer' }} onClick={() => setCompletedTask(false)} className="bg-[#A5E314] hover:bg-[#10130D] p-4 rounded-tl-2xl text-[#374C07] hover:text-[#EDF9D0]">
              <h4 className="font-gameria text-[14px] md:text-[24px]">UNCOMPLETED TASK</h4>
              <hr />
              <p className="py-1 md:py-3 text-[10px] text-[14px]">Perform the task below and win prizes.</p>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={() => setCompletedTask(true)} className="bg-[#10130D] hover:bg-[#A5E314] p-4 rounded-tr-2xl hover:text-[#374C07] text-[#EDF9D0]" >
              <h4 className="font-gameria text-[14px] md:text-[24px]">COMPLETED TASK</h4>
              <hr />
              <p className="py-1 md:py-3 text-[10px] text-[14px]">See all previously completed tasks here.</p>
            </div>

          </div>
          {
            completedTask ?
              <div className="h-[701px] flex justify-center items-center m-auto w-full bg-[#10130D99] md:rounded-tr-3xl rounded-b-3xl">
                <div>
                  <Image
                    src={'/images/emptystate.png'}
                    width={571}
                    height={363}
                    priority
                    alt="" />
                  <h4 className="text-[24px] font-bold text-center">You do not have any completed task yet</h4>
                </div>
              </div>
              :
              // Items in the task
              <div className="h-[701px] m-auto w-full  overflow-y-scroll bg-[#10130D99] rounded-tr-3xl rounded-b-3xl">
                {tasks.map((task, index) => {
                  return (
                    <div key={`${index}-${task}`} className="flex flex-row p-[24px] items-center gap-8">
                      <Image
                        src={task.image}
                        width={272}
                        height={82}
                        priority
                        alt="" />
                      <div>
                        <div className="flex flex-row gap-8 items-center">
                          <h4 className="text-[25px] font-gameria text-center">{task.title}</h4>
                          <div>
                            <Image
                              src={task.icon}
                              width={20}
                              height={20}
                              priority
                              alt="" />
                          </div>
                        </div>
                        <p>$PUMP: {task.reward}</p>
                      </div>
                      <div className="flex flex-row items-center gap-4 justify-center">
                        <button className="flex flex-row items-center gap-2 bg-[#A5E314] p-3 rounded-xl text-[#10130D]"> <Image
                          src={task.icon}
                          width={10}
                          height={10}
                          priority
                          alt="" /> Follow</button>

                        <div>
                          <CustomInput
                            className=""
                            onChange={(e) => { }}
                            sx={{ marginBottom: '10px' }}
                            placeholder="Enter username"
                            type={"text"}
                            addOnStart={<Person2Rounded color="inherit" />}
                            addOnEnd={<button onClick={() => { }} className="text-[#E1F6B1]" >Continue </button>}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>
          }


        </div>
      </div>
      <Faqs />
      <Footer />
    </div>
  )
}
