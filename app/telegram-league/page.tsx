"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import { leagues } from './utils';


export default function TelegramLeague() {
    const [currentLeague, setCurrentLeague] = useState(0)
    const [leagueTitle, setLeagueTitle] = useState(leagues[0].rank)


    function handleNext() {
        if (currentLeague == leagues.length - 1) return;
        setCurrentLeague(currentLeague + 1)
        setLeagueTitle(leagues[currentLeague + 1].rank)
    }
    function handlePrev() {
        if (currentLeague == 0) return;
        setCurrentLeague(currentLeague - 1)
        setLeagueTitle(leagues[currentLeague - 1].rank)
    }
    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')] flex flex-row justify-center items-start pt-20 text-[#EDF9D0] h-screen w-screen" >
            <div className='flex flex-col justify-between'>
                <div className='text-center '>
                    <div className=''>
                        <div className='flex flex-col justify-center gap-2 items-center'>
                            {/* <Image src="/telegram/league/goldleague.png" alt='' width={208} height={35} priority /> */}
                            <h2 className='font-gameria text-[36px]'>{leagueTitle}</h2>

                            <p className='text-[14px] w-8/12 m-auto text-[#EDF9D0] '>
                                Your number of shares determines the league you enter
                            </p>
                        </div>

                    </div>
                </div>
                <div className=''>

                    {leagues.map((item, index) => {
                        if (index !== currentLeague) return null;
                        return (
                            <div className='flex h-[400px] flex-col gap-y-2 justify-center items-center'>

                                <div className='flex flex-row justify-between gap-4 items-center m-auto'>
                                    <div className='border-[#52710A] border bg-[#10130D] flex flex-row items-center justify-center rounded-full h-[150px] w-[44px] '>
                                        <KeyboardArrowLeft onClick={() => handlePrev()} className='font-bold text-[#52710A]' />
                                    </div>
                                    <div className='w-[230px] flex flex-row justify-center'>
                                        <Image src={item.image} alt='' width={230} height={230} priority />
                                    </div>
                                    <div className='border-[#52710A] border bg-[#10130D] flex flex-row items-center justify-center rounded-full h-[150px] w-[44px] '>
                                        <KeyboardArrowRight onClick={() => handleNext()} className='font-bold text-[#52710A]' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='text-[36px] font-bold'>{item.title}</p>
                                    <p className='text-[16px] text-[#E1F6B1]'>From {item.from}</p>
                                </div>
                                <div className='border-[#A5E314] border-2 p-1 px-2 flex rounded-3xl flex-row justify-center  gap-2 items-center'>
                                    <p><Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} /></p>
                                    <p>0 / <span className='text-[#52710A]'>{item.from}</span></p>
                                </div>
                            </div>
                        )
                    })}

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
