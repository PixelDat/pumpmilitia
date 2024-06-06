"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle } from '@mui/icons-material';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import DashBoardModal from '../components/telegramComp/modalComp/modalCompDash';
import TimerCount from '../components/timerComponent/timer';
import TimerTapCount from '../components/telegramComp/tapComp/timer';
import { checkClaimBalance, getTurboReward, getUserDetails, playAudio, stopAudio } from '@/lib/utils/request';
import { ToastComponent } from '../components/toastComponent/toastComponent';
const Cookies = require("js-cookie");


export default function TelegramBotDash() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })

    const [showExplosion, setShowExplosion] = useState(false)
    const [opened, setOpened] = React.useState(true);
    const [percent, setPercent] = useState(100);
    const [tapping, setTapping] = useState(false);
    const [gradeAmount, setGradeAmount] = useState(5000)
    const [showers, setShowers] = useState<number[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [calAmount, setCalAmount] = useState(5000)
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(true);

    useEffect(() => {
        if (showExplosion) {
            let explosion = document.getElementById('explosionaudio') as HTMLAudioElement;
            playAudio(explosion);
        }

    }, [])

    useEffect(() => {

        let encrypt = Cookies.get('encrypt_id');
        (async () => {

            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
                let claimResponse = await checkClaimBalance(encrypt)
                if (claimResponse.status) {
                    setSignedIn(true);

                }

                let turboReward = await getTurboReward(encrypt);
                if (turboReward.status) {
                    console.log(turboReward.data)
                }
            }
        })()

    }, [])

    const claimBalance = async () => {

    }

    const updatePercentage = () => {

        let tapping = document.getElementById('tapaudio') as HTMLAudioElement;
        let gunshot = document.getElementById('gunaudio') as HTMLAudioElement;
        // stopAudio(tapping)
        stopAudio(gunshot)

        // playAudio(tapping);
        playAudio(gunshot);

        setPercent((prev: number) => Math.max(prev - 10, 0));
        setCalAmount(calAmount - 50)
        setShowImage(true)
        setTapping(true)
        setShowers((prev) => [...prev, Date.now()]);
    };


    useEffect(() => {
        if (percent < 100) {
            let tapping = document.getElementById('tapaudio') as HTMLAudioElement;
            let gunshot = document.getElementById('gunaudio') as HTMLAudioElement;
            setTimeout(() => {
                setShowImage(false);
                stopAudio(gunshot)
            }, 2000)
        }
    }, [showImage])

    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/dashpage/bacg.png')]  text-[#EDF9D0] h-screen w-screen" >
            {error &&
                <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
            }
            <div className='flex flex-col justify-between items-center space-y-8 pt-10'>
                <div className='text-center flex flex-col justify-center items-center space-y-2 '>
                    <div className=''>
                        <div className='flex flex-row justify-center items-center '>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                            <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                        </div>

                    </div>
                    <Image src='/telegram/dashpage/playbtn.png' alt='' width={171} height={84} priority />

                    <div style={{ cursor: 'pointer' }} onClick={() => { location.href = '/telegram-league' }} className='flex flex-row justify-center gap-2 items-center'>
                        <Image src='/telegram/dashpage/trophy.png' alt='' width={24} height={24} priority />
                        <p className='text-[24px] font-bolder'>Corporal</p>
                        <ArrowForward />
                    </div>
                </div>
                <div className='flex flex-row h-[350px]  justify-center items-center m-auto '>

                    <div style={{ cursor: 'pointer' }} onClick={() => updatePercentage()} className='flex w-[362px] h-[400px]  relative flex-col justify-center items-center'>

                        <div className='relative -right-5 z-10'>

                            {showImage ? (
                                <img style={{ cursor: 'pointer', objectFit: "cover", filter: 'brightness(150%)' }} height={408} src='/telegram/dashpage/gunbaza.gif' alt='' />
                            ) : (
                                <img style={{ cursor: 'pointer', objectFit: "cover", filter: 'brightness(150%)' }} height={408} src='/telegram/dashpage/walking2.gif' alt='' />

                            )
                            }
                        </div>


                        {/* <div className='absolute w-full z-0'>
                            <img style={{ cursor: 'pointer', objectFit: "cover" }} height={408} src='/telegram/dashpage/bomb.gif' alt='' />
                        </div> */}

                        {/* <div className='w-10/12 z-20 m-auto absolute bottom-0'>
                            <TimerTapCount />
                        </div> */}
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
