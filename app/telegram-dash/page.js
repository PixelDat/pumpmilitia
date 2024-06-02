"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';
import DashBoardModal from '../components/telegramComp/modalComp/modalCompDash';


export default function TelegramBotDash() {
    const [opened, setOpened] = React.useState(false);

    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')]  text-[#EDF9D0] h-screen w-screen" >
            <div className='flex flex-col justify-between pt-10'>
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

                    <div className='flex h-[400px] flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/grinch.png' alt='' width={199} height={209} priority />
                    </div>

                </div>

                <div className='w-10/12 m-auto'>
                    <Tapcomponent opened={opened} />
                </div>
                <div className=''>
                    <NavigationComp />
                </div>
            </div>

            <DashBoardModal setOpened={setOpened} opened={opened} />



        </div >
    )
}
