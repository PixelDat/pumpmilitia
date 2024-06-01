"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';


export default function TelegramLeague() {

    let boost = [
        {
            title: "Invite Friends",
            amount: "300,000",
        },
        {
            title: "Play Pump Militia",
            amount: "300,000",
        },
        {
            title: "Quests",
            amount: "300,000",
        }
    ]

    return (
        <>
            <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-10 text-[#EDF9D0] h-screen w-screen" >
                <div className='w-screen space-y-8'>
                    <div className='text-center space-y-4 '>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Coin Balance</h2></div>
                            <div className='flex flex-row justify-center items-center'>
                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={58} height={58} priority />
                                <p className='font-gameria text-[40px]'>10,000</p>
                            </div>

                        </div>
                        <div className='flex flex-row justify-center bg-[#A5E314] w-[142px] m-auto py-2 rounded-2xl text-[#20251A] gap-2 items-center'>
                            <p className='text-[16px] font-bold'>How it works</p>
                            <ArrowForward />
                        </div>
                    </div>

                    <div className='px-4 space-y-3'>

                        <div>
                            <Image src='/telegram/task/campaigns.png' alt='' width={122} height={24} priority />
                        </div>
                        <p>Comfy tasks from PumpMilitia: perform these tasks and earn coins</p>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='w-full border-[#374C07] border rounded-3xl p-3 justify-center items-center'>
                                <div className=' flex flex-row items-center justify-between '>
                                    <div>
                                        <h2 className='font-gameria text-[20px]'>pump militia campaign</h2>
                                        <p className='text-[#EDF9D0] w-10/12'>We have made coins pool for all users to earn for completing tasks</p>
                                    </div>
                                    <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-gameria text-[14px]'>Total Completed</h2>
                                    <p className='p-1 w-[58px] text-center rounded-full text-[#D2F189] bg-[#282F20]'>
                                        0 / <span className='text-[#D2F189]'>7</span>
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='px-4 space-y-4'>
                        <div>
                            <Image src='/telegram/task/tasks.png' alt='' width={66} height={24} priority />
                        </div>
                        <div className='flex flex-col h-[250px] overflow-scroll border-[#374C07] border rounded-2xl items-center divide-y divide-[#374C07]'>
                            {boost.map((item, inde) => {
                                return (
                                    <div className='flex flex-row w-full gap-2   p-3 justify-center items-center'>
                                        <Image className='' src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                                        <div className='basis-4/5'>

                                            <h2 className='font-gameria text-[24px]'>{item.title}</h2>
                                            <div className='flex flex-row justify-start items-center'>
                                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                                                <p className='text-[#D2F189] font-bold'>+{item.amount}</p>
                                            </div>
                                        </div>
                                        <div className='basis-1/5'>
                                            <ArrowForward className='text-[#20251A] rounded-full p-2 text-[40px] bg-[#A5E314]' />
                                        </div>

                                    </div>
                                )
                            })}


                        </div>

                    </div>

                </div >

            </div >
            <CustomModal type='taskModal' />

        </>

    )
}
