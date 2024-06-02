"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, CopyAll, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';


export default function TelegramLeague() {
    const [opened, setOpened] = React.useState(false);

    let boost = [
        {
            title: "Refer 1 Fren",
            amount: "3,000",
        },
        {
            title: "Play Pump Militia",
            amount: "300,000",
        },
        {
            title: "Quests",
            amount: "300,000",
        }
        ,
        {
            title: "Quests",
            amount: "300,000",
        },
        {
            title: "Quests",
            amount: "300,000",
        },
        {
            title: "Quests",
            amount: "300,000",
        }
    ]

    return (
        <>
            <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-10 text-[#EDF9D0] h-full w-screen" >
                <div className='w-screen space-y-8'>
                    <div className='text-center space-y-4 '>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Your Frens</h2></div>
                            <div className='flex flex-row justify-center items-center'>
                                <Image src='/telegram/dashpage/greencoin.png' alt='' width={58} height={58} priority />
                                <p className='font-gameria text-[40px]'>0 FRENS</p>
                            </div>

                        </div>
                        <div className='flex flex-row justify-center bg-[#A5E314] w-[142px] m-auto py-2 rounded-2xl text-[#20251A] gap-2 items-center'>
                            <p className='text-[16px] font-bold'>How it works</p>
                            <ArrowForward />
                        </div>
                    </div>

                    <div className='px-4 space-y-3'>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='w-full border-[#374C07] border rounded-3xl p-3 justify-center items-center'>

                                <div className='space-y-4'>
                                    <h2 className='font-gameria text-[24px]'>Referral Link</h2>
                                    <p className='text-[#EDF9D0] w-10/12'>Invite your frens and get bonuses!</p>
                                    <div className='flex flex-row justify-between items-center border-[#A5E314] border p-1 rounded-lg '>
                                        <span>https://t.me/pumpmilitia_c...0998884848</span>
                                        <CopyAll className='text-[14px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='px-4 space-y-4'>
                        <div className='flex flex-col  border-[#374C07] border rounded-2xl items-center'>
                            <div className='p-4 border-b-[#374C07]' >
                                <h2 className='font-gameria text-[24px]'>3000 Coins for Invite</h2>
                                <p>You will get 3000 coins for every invite. Reach thresholds and claim bonuses</p>
                            </div>
                            <div className='space-y-4 w-full p-2'>

                                {boost.map((item, index) => {
                                    return (
                                        <div className=' border bg-[#10130d]  border-[#476116]/50 p-2 rounded-2xl'>
                                            <div key={index} className='flex  flex-row justify-between items-center w-full gap-2   p-2'>
                                                <div className=''>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <Image src='/telegram/dashpage/greencoin.png' alt='' width={20} height={20} priority />
                                                        <h2 className='text-[16px] font-bold'>{item.title}</h2>
                                                    </div>
                                                    <div className='left-[15px] relative'>
                                                        <div className='flex flex-row justify-start items-center'>
                                                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                                                            <p className='text-white text-[24px] font-gameria font-bold'>+{item.amount}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='rounded-full p-2  text-[#20251A] text-[12px] bg-[#A5E314]'>
                                                    Claim <ArrowForward className='text-[12px]' />
                                                </div>

                                            </div>
                                            <div className='w-full'>
                                                <div className=' bg-[#374C07] w-full m-auto p-1 rounded-full'>
                                                    <div className='h-[14px] w-[50%] bg-gradient-to-b from-[#A5E314] rounded-full'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>

                    </div>

                </div >

            </div >
            <CustomModal type='taskModal' setOpened={setOpened} opened={opened} />

        </>

    )
}
