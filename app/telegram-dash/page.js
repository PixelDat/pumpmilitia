"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';

let coin = [
    {
        icon: '/telegram/dashpage/yellowcoin.png',
        text: 'Earn'
    },
    {
        icon: '/telegram/dashpage/boosters.png',
        text: 'Boosters'
    },
    {
        icon: '/telegram/dashpage/group.png',
        text: 'Invite'
    }
]
export default function TelegramBotDash() {

    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')] flex flex-row justify-center items-center text-[#EDF9D0] h-screen w-screen" >
            <div>
                <div className='text-center '>
                    <div className=''>
                        <div className='flex flex-row justify-center items-center'>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={58} height={58} priority />
                            <p className='font-gameria text-[40px]'>10,000</p>
                        </div>

                    </div>
                    <div className='flex flex-row justify-center gap-2 items-center'>
                        <Image src='/telegram/dashpage/trophy.png' alt='' width={24} height={24} priority />
                        <p className='text-[24px] font-bolder'>Corporal</p>
                        <ArrowForward />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center m-auto'>

                    <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/grinch.png' alt='' width={199} height={209} priority />
                    </div>
                    {/* <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/loadingtxt.png' alt='' width={199} height={209} priority />
                    </div> */}

                </div>

                <div>
                    <Tapcomponent />
                </div>

                <div className='flex flex-row justify-center gap-3 absolute bottom-0 items-center'>
                    {coin.map((item, index) => {
                        console.log(item)
                        return (
                            <IconButton key={index} icon={item.icon} text={item.text} />
                        )
                    })}
                </div>
            </div>


        </div >
    )
}
