"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import TurboModal from '../components/telegramComp/modalComp/modalCompTurbo';
import { ToastComponent } from '../components/toastComponent/toastComponent';
import { getUserDetails } from '@/lib/utils/request';
import TelegramLayout from '../telegramLayout/layout';
import axios from 'axios';
const Cookies = require("js-cookie");

let boost = [
    {
        title: "Invite Friends",
        amount: "3,000",
        target: '/telegram-frens',
        image: '/telegram/frens/frensimg.png'
    },
    {
        title: "Play Pump Militia",
        amount: "300,000",
        target: '/telegram-dash',
        image: '/telegram/boost/play.png'


    },
    {
        title: "Quests",
        amount: "300,000",
        target: '/telegram-pumpearn',
        image: '/telegram/frens/questimg.png'


    }
]


export default function TelegramBoosters() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let encrypt = Cookies.get('encrypt_id');


    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })
    const [opened, setOpened] = React.useState(false);
    const [selectedBoost, setSelectedBoost] = useState("")
    const [update, setUpdate] = useState(0);
    const [userBalance, setUserBalance] = useState(0);

    const [boostStat, setBoostStat] = useState({
        remainingTurboBoost: 0,
        remainingReloadBoost: 0,
        maxTurboBoost: 0,
        maxReloadBoost: 0
    })

    useEffect(() => {
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
            }
        })();
        //check Boosts
        (async () => {
            // let url = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/check-boosts"
            let url = "http://localhost:8080/check-boosts";
            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `${encrypt}` }
                });
                setBoostStat({
                    remainingTurboBoost: response.data.remainingTurboBoosts,
                    remainingReloadBoost: response.data.remainingReloadBoosts,
                    maxTurboBoost: response.data.maxDailyTurboBoosts,
                    maxReloadBoost: response.data.maxDailyReloadBoosts
                })
                // location.href = '/telegram-dash';

            } catch (error: any) {
                setError(true);
                setErrMessage({ type: 'error', message: error.response.data.message });
                setLoading(false);
                setTimeout(() => {
                    setError(false);
                }, 2000)
            }

        })();
    }, [update])

    const startBoost = async () => {
        if (selectedBoost != "Blast" && selectedBoost != "Reload") {
            return;
        };
        // let url = selectedBoost == "Blast" ? "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/turbo-boost" : "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/reload-boost";
        let url = selectedBoost == "Blast" ? "http://localhost:8080/turbo-boost" : "http://localhost:8080/reload-boost";
        try {
            const response = await axios.post(url, {}, {
                headers: { Authorization: `${encrypt}` }
            });
            setError(true);
            setErrMessage({ type: 'success', message: response.data.message });
            setLoading(false);
            setTimeout(() => {
                setError(false);
            }, 2000)
            location.href = '/telegram-dash';

        } catch (error: any) {
            setError(true);
            setErrMessage({ type: 'error', message: error.response.data.message });
            setLoading(false);
            setTimeout(() => {
                setError(false);
            }, 2000)
        }


    }
    return (
        <TelegramLayout>
            <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-5 text-[#EDF9D0] h-screen w-screen" >
                {error &&
                    <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
                }
                <div className='w-screen space-y-8'>
                    <div className='text-center space-y-4  flex flex-col justify-center items-center m-auto'>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Coin Balance</h2></div>
                            <div className='flex flex-row justify-center items-center'>
                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={48} height={48} priority />
                                <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                            </div>

                        </div>
                        <Image src='/telegram/dashpage/howbtn.png' alt='' width={130} height={58} priority />

                    </div>

                    <div className='px-4 space-y-4'>

                        <div>
                            <Image src='/telegram/boost/free.png' alt='' width={137} height={24} priority />
                        </div>
                        <div className='flex flex-row items-center gap-3'>

                            <div onClick={() => {
                                setSelectedBoost("Blast")
                                setOpened(true)
                            }} className='basis-1/2 flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                                <Image src='/telegram/boost/turbo.png' alt='' width={48} height={48} priority />
                                <h2 className='font-gameria'>Blast</h2>
                                <p className='text-[#6E970D]'> {boostStat.remainingTurboBoost} /{boostStat.maxTurboBoost} Boost</p>
                            </div>
                            <div onClick={() => {
                                setSelectedBoost("Reload")
                                setOpened(true)
                            }}
                                className=' basis-1/2 flex flex-col border-[#374C07] border rounded-2xl p-3 justify-center items-center'>
                                <Image src='/telegram/boost/reload.png' alt='' width={48} height={48} priority />
                                <h2 className='font-gameria'>Reload</h2>
                                <p className='text-[#6E970D]'> {boostStat.remainingReloadBoost} /{boostStat.maxReloadBoost} Boost</p>
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
                                    <div key={index} onClick={() => {
                                        if (item.title.includes('Play')) {
                                            setSelectedBoost("Play")
                                            setOpened(true)
                                        } else {
                                            location.href = `${item.target}`
                                        }
                                    }} className='flex flex-row w-full gap-2   p-3 justify-center items-center'>
                                        <Image className='' src={item.image} alt='' width={35} height={35} priority />
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


                    <TurboModal selectedBoost={selectedBoost} startBoost={startBoost} setOpened={setOpened} opened={opened} />
                </div >


            </div >
        </TelegramLayout>

    )
}
