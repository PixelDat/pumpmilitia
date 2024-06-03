"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import TurboModal from '../components/telegramComp/modalComp/modalCompTurbo';


export default function TelegramBoosters() {
    const [opened, setOpened] = React.useState(true);

    let boost = [
        {
            title: "Invite Friends",
            amount: "300,000",
            target: '/telegram-frens'
        },
        {
            title: "Play Pump Militia",
            amount: "300,000",
            target: '/telegram-dash'

        },
        {
            title: "Quests",
            amount: "300,000",
            target: '/'

        }
    ]

    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-20 text-[#EDF9D0] h-screen w-screen" >
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

                <div className='px-4 space-y-4'>

                    <div>
                        <Image src='/telegram/boost/free.png' alt='' width={137} height={24} priority />
                    </div>
                    <div className='flex flex-row items-center gap-3'>

                        <div className='basis-1/2 flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                            <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                            <h2 className='font-gameria'>Turbo</h2>
                            <p className='text-[#6E970D]'> 3 /3 Boost</p>
                        </div>
                        <div className=' basis-1/2 flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                            <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                            <h2 className='font-gameria'>Reload</h2>
                            <p className='text-[#6E970D]'> 3 /3 Boost</p>
                        </div>
                    </div>

                </div>

                <div className='px-4 space-y-4'>

                    <div>
                        <Image src='/telegram/boost/moreboost.png' alt='' width={137} height={24} priority />
                    </div>
                    <div className='flex flex-col border-[#374C07] border rounded-2xl items-center divide-y divide-[#374C07]'>
                        {boost.map((item, index) => {
                            return (
                                <div key={index} onClick={() => { location.href = `${item.target}` }} className='flex flex-row w-full gap-2   p-3 justify-center items-center'>
                                    <Image className='' src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                                    <div className='basis-4/5'>

                                        <h2 className='font-gameria text-[24px]'>{item.title}</h2>
                                        <div className='flex flex-row justify-start items-center'>
                                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                                            <p className='text-[#6E970D]'>{item.amount}</p>
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


                <TurboModal setOpened={setOpened} opened={opened} />
            </div >


        </div >
    )
}
