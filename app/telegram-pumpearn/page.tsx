"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';
import { tasks } from './utils';
import { createAccount, getUserDetails } from '@/lib/utils/request';
import TelegramLayout from '../telegramLayout/layout';
const Cookies = require("js-cookie");


export default function TelegramPumpEarn() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let encrypt = Cookies.get('encrypt_id');


    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })
    const [opened, setOpened] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState(0)
    const [update, setUpdate] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
                setSignedIn(true);
            }
        })()

    }, [update])

    async function createMiningAccount(id: number) {
        let title = tasks[id].title;
        let url = title.includes('X') ? "https://evp-follow-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : title.includes('Telegram') ? "https://evp-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : title.includes('Discord') ? "https://evp-discord-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : ""

        // let response = await createAccount(url, encrypt)
        // if (response.status == true) {
        setSelectedTask(id);
        setOpened(true);
        // console.log(response)
        // }

    }



    return (

        <TelegramLayout>
            <div className="bg-cover bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-12 text-[#EDF9D0] w-screen" >
                <div className='flex  flex-col justify-between items-center space-y-8'>

                    <div className='text-center space-y-4 flex flex-col justify-center items-center'>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Coin Balance</h2></div>
                            <div className='flex flex-row justify-center items-center'>
                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={58} height={58} priority />
                                <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                            </div>

                        </div>
                        <Image src='/telegram/dashpage/howbtn.png' alt='' width={130} height={58} priority />

                    </div>

                    <div className='px-4 space-y-3'>

                        <div>
                            <Image src='/telegram/task/campaigns.png' alt='' width={122} height={24} priority />
                        </div>
                        <p>Comfy tasks from PumpMilitia: perform these tasks and earn coins</p>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='w-full border-[#374C07] border rounded-3xl p-3 justify-center items-center'>
                                <div className=' flex flex-row items-center justify-between '>
                                    <div>
                                        <h2 className='font-gameria text-[20px]'>pump militia campaign</h2>
                                        <p className='text-[#EDF9D0] w-10/12'>We have made coins pool for all users to earn for completing tasks</p>
                                    </div>
                                    <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-gameria text-[14px]'>Total Completed</h2>
                                    <p className='p-1 w-[58px] text-center rounded-full text-[#D2F189] bg-[#282F20]'>
                                        0 / <span className='text-[#D2F189]'>7</span>
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='px-4 space-y-4 pb-8'>
                        <div>
                            <Image src='/telegram/task/tasks.png' alt='' width={66} height={24} priority />
                        </div>
                        <div className='flex flex-col  border-[#374C07] border rounded-2xl items-center divide-y divide-[#374C07]'>
                            {tasks.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row w-full gap-2   p-3 justify-center items-center'>
                                        {item.title.includes('Telegram') ?

                                            <Image src='/telegram/social/telegram.png' alt='' width={32} height={32} priority />
                                            : item.title.includes('X') ?
                                                <Image src='/telegram/social/xicon.png' alt='' width={32} height={32} priority />
                                                : item.title.toLowerCase().includes('tiktok') ?
                                                    <Image src='/telegram/social/tiktok.jpeg' alt='' width={32} height={32} priority />
                                                    : item.title.includes('Instagram') ?
                                                        < Image src='/telegram/social/instagram.png' alt='' width={32} height={32} priority />
                                                        :
                                                        <Image src='/telegram/social/youtube.png' alt='' width={32} height={32} priority />

                                        }

                                        <div className='basis-4/5'>

                                            <h2 className='font-gameria text-[20px]'>{item.title}</h2>
                                            <div className='flex flex-row justify-start items-center'>
                                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={24} height={24} priority />
                                                <p className='text-[#D2F189] text-[16px] font-bold'>+{item.amount}</p>
                                            </div>
                                        </div>
                                        <div className='basis-1/5'>
                                            <ArrowForward onClick={() => {
                                                createMiningAccount(index)

                                            }} className='text-[#20251A] rounded-full p-2 text-[40px] bg-[#A5E314]' />
                                        </div>

                                    </div>
                                )
                            })}


                        </div>

                    </div>
                </div>
            </div >
            <CustomModal setUpdate={setUpdate} encrypt={encrypt} taskIndex={selectedTask} setOpened={setOpened} opened={opened} />
        </TelegramLayout>
    )
}
