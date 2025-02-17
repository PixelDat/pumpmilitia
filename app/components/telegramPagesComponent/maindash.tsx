"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Tapcomponent from '../telegramComp/tapComp/tapcomp';
import { ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle } from '@mui/icons-material';
import DashBoardModal from '../telegramComp/modalComp/modalCompDash';
import TimerCount from '../timerComponent/timer';
import TimerTapCount from '../telegramComp/tapComp/timer';
import { checkClaimBalance, checkDownloadReward, checkMiningBalanceDash, checkRefill, checkTurboBoostOn, claimTapBalance, createAccount, getTurboReward, getUserDetails, hideGif, playAudio, showGif, stopAudio } from '@/lib/utils/request';
import { ToastComponent } from '../toastComponent/toastComponent';
import GrenadeComponent from '../telegramComp/tapComp/grenade';
import SpriteAnim from '../animationComponent/spriteSheet';
import PointsShower from '../telegramComp/tapComp/showerComp';
import { leagues } from '@/app/telegram-league/utils';
import TelegramLayout from '@/app/telegramLayout/layout';

const Cookies = require("js-cookie");

interface ShowerItem {
    id: number;
    points: number;
}

interface ShowerComponentProps {
    points: number;
}

interface NavProps {
    selectedPage: string;
    setSelectedPage: (selectedPage: string) => void;
}

const TelegramBotDash: React.FC<NavProps> = (props) => {
    const { setSelectedPage } = props;
    let encrypt = Cookies.get('encrypt_id');

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [referralId, setReferralId] = useState('');
    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })
    const [points, setPoints] = useState(10);
    const [update, setUpdate] = useState(0);
    const [showExplosion, setShowExplosion] = useState(false)
    const [opened, setOpened] = React.useState(false);
    const [percent, setPercent] = useState(100);
    const [tapping, setTapping] = useState(false);
    const [gradeAmount, setGradeAmount] = useState(0)
    const [showers, setShowers] = useState<ShowerItem[]>([]);
    const [showImage, setShowImage] = useState(false);
    const [calAmount, setCalAmount] = useState(0)
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(true);
    const [isRunning, setIsRunning] = useState(false);
    const [fullBalance, setFullBalance] = useState(true);
    const [claimTime, setClaimTime] = useState("2024-06-12T19:24:02.000Z")
    const [animationState, setAnimationState] = useState('walking');
    const [countDownActive, setIsCountDownActive] = useState(false)
    const [boostActive, setBoostActive] = useState(false);
    const [rank, setRank] = useState({
        rank: 'Corporal',
        image: '/telegram/league/coporal.png',
    });

    useEffect(() => {
        const loadItems = async () => {
            let checkedDownloaded = await checkDownloadReward(encrypt);
            if (checkedDownloaded.status === 'server_error') {
                // Handle server error
                console.log('Server error occurred');
            } else if (checkedDownloaded.status === 'connection_error') {
                // Handle connection error
                console.log('Connection error occurred');
            } else if (checkedDownloaded.status === 'unknown_error') {
                // Handle unknown error
                console.log('Unknown error occurred');
            } else if (checkedDownloaded.status === true && !checkedDownloaded.data.status) {
                setOpened(true);
            }

            let checkBoost = await checkTurboBoostOn(encrypt);
            if (checkBoost.data.turboBoostOn) {
                setShowExplosion(true)
                setBoostActive(checkBoost.data.turboBoostOn);
            } else {
                setBoostActive(false);
                setShowExplosion(false)
            }

            let checkMBalance = await checkMiningBalanceDash(encrypt);
            let data = checkMBalance.data;
            setClaimTime(data.nextClaimTime);
            setFullBalance(data.fullBalanceBox);
            setIsCountDownActive(data.isCountDownActive);
            setCalAmount(data.balance || 0);
            setGradeAmount(data.fullBalanceAmount || 0);
            // let checkRefillBoost = await checkRefill(encrypt);
        }

        loadItems();
        const intervalId = setInterval(loadItems, 4000);

        return () => clearInterval(intervalId);
    }, [encrypt, update]);

    useEffect(() => {
        let referralId = Cookies.get('referrerId');

        setReferralId(referralId);
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)

                const balance = response.data.points;
                const parseNumber = (item: string) => Number(item.replace(/,/g, ''));

                if (balance >= parseNumber(leagues[6].from)) {
                    setRank({ rank: leagues[6].rank, image: leagues[6].image });
                } else if (balance >= parseNumber(leagues[5].from)) {
                    setRank({ rank: leagues[5].rank, image: leagues[5].image });
                } else if (balance >= parseNumber(leagues[4].from)) {
                    setRank({ rank: leagues[4].rank, image: leagues[4].image });
                } else if (balance >= parseNumber(leagues[3].from)) {
                    setRank({ rank: leagues[3].rank, image: leagues[3].image });
                } else if (balance >= parseNumber(leagues[2].from)) {
                    setRank({ rank: leagues[2].rank, image: leagues[2].image });
                } else if (balance >= parseNumber(leagues[1].from)) {
                    setRank({ rank: leagues[1].rank, image: leagues[1].image });
                } else {
                    setRank({ rank: 'Corporal', image: leagues[0].image });
                }

            }
        })();

    }, [update]);

    const updatePercentage = async () => {
        let gunshot = document.getElementById('gunaudio') as HTMLAudioElement;

        if (percent <= 0) return;

        if (countDownActive) {
            setError(true);
            setErrMessage({ type: 'error', message: "Your reward is not ready for claim" });
            setTimeout(() => { setError(false) }, 2000)
            return;
        }

        setUpdate(Math.random())

        setTimeout(async () => {
            setAnimationState('shooting');
            playAudio(gunshot);
            let tapurl = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/register-tap";
            let response = await claimTapBalance(tapurl, encrypt)
            response.status == true ? setPoints(response.data.claimedPoints) : setPoints(2000);
        }, 500)

        setTimeout(() => {
            setAnimationState('walking');
            stopAudio(gunshot);
            setIsRunning(true);
            setPercent(prev => Math.max(prev - 10, 0));
            let bal = calAmount - points;
            setCalAmount(bal <= 0 ? 0 : bal);
            const newShower: ShowerItem = { id: Math.random(), points };
            setShowers([...showers, newShower]);
            setTapping(true);
        }, 700)
    };

    useEffect(() => {
        async function createMiningAccount() {
            await createAccount("https://evp-follow-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account", encrypt);
            await createAccount("https://evp-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account", encrypt);
            await createAccount("https://evp-discord-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account", encrypt);
        }
        createAccount("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/create-referral-account", encrypt);
        createMiningAccount();
    }, []);

    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/dashpage/bacg.png')] text-[#EDF9D0] h-screen w-screen" >
            {error &&
                <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
            }
            <div className='flex flex-col h-[67%] relative  pt-2  justify-center items-center'>
                <div className='text-center flex flex-col justify-center items-center space-y-2 '>
                    <div className=''>
                        <div className='flex flex-row justify-center items-center '>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                            <p className='font-gameria text-[40px]'>{Number(userBalance.toFixed(0)).toLocaleString()}</p>
                        </div>
                    </div>
                    <a href='pump://pumpmilitia.app' target='_blank'>
                        <Image src='/telegram/dashpage/playbtn.png' alt='' width={171} height={84} priority />
                    </a>

                    <div style={{ cursor: 'pointer' }} onClick={() => { location.href = '/telegram-league' }} className='flex flex-row justify-center gap-1 items-center'>
                        <Image src={rank.image} alt='' width={24} height={24} priority />
                        <p className='text-[24px] font-bolder'>{rank.rank}</p>
                        <ArrowForward />
                    </div>
                </div>

                <div
                    style={{ cursor: 'pointer', filter: 'brightness(100%)' }}
                    onPointerDown={() => updatePercentage()}
                    onTouchStart={(e) => {
                        e.preventDefault();
                        updatePercentage();
                    }}
                    className='flex sm:py-2 relative flex-col justify-center items-center'
                >
                    <div className='relative z-10'>
                        <SpriteAnim animationState={animationState} />
                        {showers.map(shower => (
                            <PointsShower key={shower.id} {...shower} />
                        ))}
                    </div>

                    {showExplosion && !countDownActive &&
                        <div className='absolute w-full z-0'>
                            <img style={{ cursor: 'pointer', objectFit: "cover" }} height={408} src='/telegram/dashpage/bomb.gif' alt='' />
                        </div>
                    }
                </div>

                {countDownActive &&
                    <div className='w-full absolute   flex flex-col justify-end items-center z-20 m-auto   bottom-0'>
                        <TimerTapCount claimTime={claimTime} setUpdate={setUpdate} />
                    </div>
                }
            </div>
            {/* Timer and Tap */}
            <div className='relative'>
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
                        setTapping={setTapping}
                        opened={opened}
                        fullBalance={fullBalance}
                    />
                </div>
            </div>

            <DashBoardModal referralId={referralId} signedIn={signedIn} setOpened={setOpened} opened={opened} />
            {boostActive && !countDownActive &&
                <GrenadeComponent percent={100} />
            }
        </div >
    )
}


export default TelegramBotDash;