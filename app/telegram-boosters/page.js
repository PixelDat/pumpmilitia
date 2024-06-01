"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';


export default function TelegramLeague() {
    const [currentLeague, setCurrentLeague] = useState(0)

    let leagues = [
        {
            title: 'League 1',
            image: '/telegram/league/trophy.png',
            from: '5000',
        },
        {
            title: 'League 2',
            image: '/telegram/league/trophy.png',
            from: '50,000',

        },
        {
            title: 'League 3',
            image: '/telegram/league/trophy.png',
            from: '100,000',
        }
    ]
    function handleNext() {
        if (currentLeague == leagues.length - 1) return;
        setCurrentLeague(currentLeague + 1)
    }
    function handlePrev() {
        if (currentLeague == 0) return;
        setCurrentLeague(currentLeague - 1)
    }
    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-20 text-[#EDF9D0] h-screen w-screen" >
            <div className='flex flex-col justify-between space-y-4'>
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


                <div className='flex flex-row justify-center items-center gap-3 w-full'>
                    <div className='flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                        <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                        <h2 className='font-gameria'>Turbo</h2>
                        <p className='text-[#6E970D]'> 3 /3 Boost</p>
                    </div>
                    <div className='flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                        <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                        <h2 className='font-gameria'>Reload</h2>
                        <p className='text-[#6E970D]'> 3 /3 Boost</p>
                    </div>
                </div>



                <div className='w-full mt-4'>
                    <div className=' bg-[#374C07] w-10/12 m-auto p-1 rounded-full'>
                        <div className='h-[14px] w-[50%] bg-gradient-to-b from-[#A5E314] rounded-full'>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <NavigationComp />
                </div>
            </div>


        </div >
    )
}
