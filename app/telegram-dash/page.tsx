"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';
import DashBoardModal from '../components/telegramComp/modalComp/modalCompDash';
import TimerCount from '../components/timerComponent/timer';
import TimerTapCount from '../components/telegramComp/tapComp/timer';


export default function TelegramBotDash() {
    const [opened, setOpened] = React.useState(true);
    const [percent, setPercent] = useState(100);
    const [tapping, setTapping] = useState(false);
    const [gradeAmount, setGradeAmount] = useState(1000)
    const [showers, setShowers] = useState<number[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [calAmount, setCalAmount] = useState(1000)


    const updatePercentage = () => {
        setPercent((prev: number) => Math.max(prev - 10, 0));
        setCalAmount(calAmount - (gradeAmount * 0.1))
        setShowImage(true)
        setTapping(true)
        setShowers((prev) => [...prev, Date.now()]);
    };

    useEffect(() => {
        if (percent < 100) {
            setTimeout(() => {
                setShowImage(false);
            }, 2000)
        }
    }, [showImage])

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

                    <div style={{ cursor: 'pointer' }} onClick={() => updatePercentage()} className='flex h-[350px] flex-row justify-center items-center'>

                        {showImage ? (
                            <Image style={{ cursor: 'pointer' }} src='/telegram/league/trophy.png' alt='' width={199} height={209} priority />
                        ) : (
                            <Image style={{ cursor: 'pointer' }} src='/telegram/dashpage/grinch.png' alt='' width={199} height={209} priority />
                        )
                        }
                    </div>

                </div>
                <div className='w-10/12 m-auto'>
                    <TimerTapCount />
                </div>

                <div className='w-10/12 m-auto'>
                    <Tapcomponent
                        calAmount={calAmount}
                        setCalAmount={setCalAmount}
                        updatePercentage={updatePercentage}
                        percent={percent}
                        setPercent={setPercent}
                        gradeAmount={gradeAmount}
                        setGradeAmount={setGradeAmount}
                        tapping={tapping}
                        showers={showers}
                        setShowers={setShowers}
                        setTapping={setTapping}
                        opened={opened} />
                </div>
                <div className=''>
                    <NavigationComp />
                </div>
            </div>

            <DashBoardModal setOpened={setOpened} opened={opened} />



        </div >
    )
}
