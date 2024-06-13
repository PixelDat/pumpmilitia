"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle } from '@mui/icons-material';
import DashBoardModal from '../components/telegramComp/modalComp/modalCompDash';
import TimerCount from '../components/timerComponent/timer';
import TimerTapCount from '../components/telegramComp/tapComp/timer';
import { checkClaimBalance, checkDownloadReward, checkMiningBalanceDash, checkRefill, checkTurboBoostOn, claimTapBalance, getTurboReward, getUserDetails, hideGif, playAudio, showGif, stopAudio } from '@/lib/utils/request';
import { ToastComponent } from '../components/toastComponent/toastComponent';
import GrenadeComponent from '../components/telegramComp/tapComp/grenade';
import TelegramLayout from '../telegramLayout/layout';

const Cookies = require("js-cookie");



export default function TelegramBotDash() {
    let encrypt = Cookies.get('encrypt_id');

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [referralId, setReferralId] = useState('');
    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })
    const [points, setPoints] = useState(0);
    const [update, setUpdate] = useState(0);
    const [showExplosion, setShowExplosion] = useState(false)
    const [opened, setOpened] = React.useState(false);
    const [percent, setPercent] = useState(100);
    const [tapping, setTapping] = useState(false);
    const [gradeAmount, setGradeAmount] = useState(0)
    const [showers, setShowers] = useState<number[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [calAmount, setCalAmount] = useState(0)
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const [fullBalance, setFullBalance] = useState(true);
    const [claimTime, setClaimTime] = useState("2024-06-12T19:24:02.000Z")


    const startExplosion = () => {
        setShowExplosion(true)
        let explosion = document.getElementById('explosionaudio') as HTMLAudioElement;
        playAudio(explosion);
        setTimeout(() => {
            stopAudio(explosion)
            setShowExplosion(false);
        }, 2000)
    }
    useEffect(() => {
        (async () => {
            let checkedDownloaded = await checkDownloadReward(encrypt);

            if (!checkedDownloaded.data.status) {
                setOpened(true)
            }
        })();

        (async () => {
            let checkBoost = await checkTurboBoostOn(encrypt);
            // console.log(checkBoost, 'Booster');
        })();

        (async () => {
            let checkRefillBoost = await checkRefill(encrypt);
            // console.log(checkRefillBoost, 'Refill');
        })()


    }, [update])

    useEffect(() => {
        let referralId = Cookies.get('referrerId');
        // console.log(referralId)
        setReferralId(referralId);
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
                // let turboReward = await getTurboReward(encrypt);
                // if (turboReward.status) {
                //     console.log(turboReward.data)
                // }
            }
        })();
        (async () => {
            let checkMBalance = await checkMiningBalanceDash(encrypt);
            let data = checkMBalance.data;
            console.log(data);
            setFullBalance(data.fullBalanceBox);
            setCalAmount(data.balance || 0);
            setGradeAmount(data.fullBalaneAmount || 0);
        })();

    }, [update]);

    const updatePercentage = async () => {
        const walking = document.getElementById('walking') as HTMLImageElement;
        const move = document.getElementById('move') as HTMLImageElement;
        const shoot = document.getElementById('shoot') as HTMLImageElement;

        if (percent <= 0) return;
        if (!fullBalance) {
            setError(true);
            setErrMessage({ type: 'error', message: "Your balance is not ready to be claimed yet." });
            setTimeout(() => { setError(false) }, 2000)
            return;
        }

        //Claim Tap Balance
        let response = await claimTapBalance('https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/register-tap', encrypt)
        setPoints(response.data.claimedPoints)
        setUpdate(Math.random())
        let tapping = document.getElementById('tapaudio') as HTMLAudioElement;
        let gunshot = document.getElementById('gunaudio') as HTMLAudioElement;
        // stopAudio(tapping)
        stopAudio(gunshot);
        setIsRunning(true);
        playAudio(gunshot);

        // Hide all GIFs initially
        hideGif(walking);
        hideGif(move);
        hideGif(shoot);


        // Sequence of showing and hiding GIFs
        showGif(move);
        setTimeout(() => {
            hideGif(move);
            showGif(shoot);
        }, 100); // Move for 100ms

        setTimeout(() => {
            hideGif(shoot);
            showGif(walking);
        }, 700); // Shoot for 500ms (200ms + 500ms)


        setPercent(prev => Math.max(prev - 10, 0));
        setCalAmount(calAmount - 50);
        setShowImage(true);
        setTapping(true);
        setShowers(prev => [...prev, Date.now()]);
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
        <TelegramLayout>
            <div className="bg-cover overflow-hidden bg-[url('/telegram/dashpage/bacg.png')] pt-12 text-[#EDF9D0] h-screen w-screen" >
                {error &&
                    <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
                }
                <div className='flex flex-col h-[60%]  justify-center items-center'>
                    <div className='text-center flex flex-col justify-center items-center space-y-2 '>
                        <div className=''>
                            <div className='flex flex-row justify-center items-center '>
                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                            </div>

                        </div>
                        <div onClick={() => location.href = "/withdraw"}>
                            <Image src='/telegram/dashpage/playbtn.png' alt='' width={171} height={84} priority />
                        </div>

                        <div style={{ cursor: 'pointer' }} onClick={() => { location.href = '/telegram-league' }} className='flex flex-row justify-center gap-2 items-center'>
                            <Image src='/telegram/dashpage/trophy.png' alt='' width={24} height={24} priority />
                            <p className='text-[24px] font-bolder'>Corporal</p>
                            <ArrowForward />
                        </div>
                    </div>

                    <div style={{ cursor: 'pointer' }} onClick={() => updatePercentage()} className='flex sm:py-5 h-[250px] md:h-[300px] relative flex-col justify-center items-center'>
                        <div className='relative -right-5 z-10 '>
                            <img className='h-[270px] w-[220px]' id='walking' style={{ cursor: 'pointer', objectFit: "cover", filter: 'brightness(150%)' }} height={408} src='/telegram/dashpage/walking2.gif' alt='' />
                            <img className='h-[270px] w-[220px]' id='move' style={{ cursor: 'pointer', display: 'none', objectFit: "cover", filter: 'brightness(150%)' }} height={408} src='/telegram/dashpage/shooting.gif' alt='' />
                            <img className='h-[270px] w-[220px]' id='shoot' style={{ cursor: 'pointer', display: 'none', objectFit: "cover", filter: 'brightness(150%)' }} height={408} src='/telegram/dashpage/gunbaza.gif' alt='' />
                        </div>

                        {showExplosion &&
                            <div className='absolute w-full z-0'>
                                <img style={{ cursor: 'pointer', objectFit: "cover" }} height={408} src='/telegram/dashpage/bomb.gif' alt='' />
                            </div>
                        }


                    </div>
                </div>
                {/* Timer and Tap */}
                <div className='relative pt-14'>
                    {!fullBalance &&
                        <div className='w-full flex flex-col justify-center items-center z-20 m-auto absolute  top-0'>
                            <TimerTapCount claimTime={claimTime} setUpdate={setUpdate} />
                        </div>
                    }
                    <div className='w-10/12 m-auto'>
                        <Tapcomponent
                            points={points}
                            isRunning={isRunning}
                            setIsRunning={setIsRunning}
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
                            opened={opened}
                            fullBalance={fullBalance}
                        />
                    </div>
                </div>

                <DashBoardModal referralId={referralId} signedIn={signedIn} setOpened={setOpened} opened={opened} />
                {/* <GrenadeComponent percent={100} startExplosion={startExplosion} /> */}

            </div >
        </TelegramLayout>



    )
}
