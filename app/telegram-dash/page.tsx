"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle } from '@mui/icons-material';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import DashBoardModal from '../components/telegramComp/modalComp/modalCompDash';
import TimerCount from '../components/timerComponent/timer';
import TimerTapCount from '../components/telegramComp/tapComp/timer';
import { getUserDetails } from '@/lib/utils/request';
import { ToastComponent } from '../components/toastComponent/toastComponent';
const Cookies = require("js-cookie");


export default function TelegramBotDash() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })

    const [opened, setOpened] = React.useState(true);
    const [percent, setPercent] = useState(100);
    const [tapping, setTapping] = useState(false);
    const [gradeAmount, setGradeAmount] = useState(1000)
    const [showers, setShowers] = useState<number[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [calAmount, setCalAmount] = useState(1000)
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {

        let encrypt = Cookies.get('encrypt_id');
        (async () => {

            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
                setSignedIn(true);
                setError(true);
                setErrMessage({ type: 'success', message: 'You are Logged in to Pump Militia game. Continue to Telegram or go back to game' });
                setTimeout(() => {
                    setError(false);
                }, 2000)
            }
        })()

    }, [])

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
        <div className="bg-cover overflow-hidden bg-[url('/telegram/dashpage/bacg.png')]  text-[#EDF9D0] h-screen w-screen" >
            {error &&
                <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
            }
            <div className='flex flex-col justify-between pt-10'>
                <div className='text-center flex flex-col justify-center items-center space-y-2 '>
                    <div className=''>
                        <div className='flex flex-row justify-center items-center '>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                            <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                        </div>

                    </div>
                    <Image src='/telegram/dashpage/playbtn.png' alt='' width={171} height={84} priority />

                    <div className='flex flex-row justify-center gap-2 items-center'>
                        <Image src='/telegram/dashpage/trophy.png' alt='' width={24} height={24} priority />
                        <p className='text-[24px] font-bolder'>Corporal</p>
                        <ArrowForward />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center m-auto '>

                    <div style={{ cursor: 'pointer' }} onClick={() => updatePercentage()} className='flex relative flex-col justify-center items-center'>

                        {showImage ? (
                            <Image style={{ cursor: 'pointer' }} src='/telegram/dashpage/active.png' alt='' width={418} height={209} priority />
                        ) : (
                            <Image style={{ cursor: 'pointer' }} src='/telegram/dashpage/still.png' alt='' width={418} height={209} priority />
                        )
                        }

                        <div className='w-10/12 m-auto absolute bottom-0'>
                            <TimerTapCount />
                        </div>
                    </div>

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

            <DashBoardModal signedIn={signedIn} setOpened={setOpened} opened={opened} />



        </div >
    )
}
