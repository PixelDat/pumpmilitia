"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle, CheckCircleOutline, CopyAll, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';
import { ToastComponent } from '../components/toastComponent/toastComponent';
import { ReferralItem, boost } from './utils';
import axios from 'axios';
import TelegramLayout from '../telegramLayout/layout';
import { playAudio } from '@/lib/utils/request';
import { CircularProgress } from '@mui/material';
const Cookies = require("js-cookie");


export default function TelegramFrens() {
    const [referralList, setReferralList] = useState([] as ReferralItem[]);
    const [opened, setOpened] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [refLink, setRefLink] = useState('')
    const [refMessage, setRefMessage] = useState('')

    const [referrals, setReferrals] = useState(0);

    let encrypt = Cookies.get('encrypt_id');
    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })

    function copyClip(text: string) {
        navigator.clipboard.writeText(text);
        setError(true);
        setErrMessage({ type: 'success', message: 'Text Copied to Clipboard' });
        setTimeout(() => {
            setError(false);
        }, 2000)
    }

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const response = await axios.get("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/list-referral-challenge", {
                    headers: { Authorization: `${encrypt}` }
                });
                setReferralList(response.data);
            }
            catch (e) {
                console.log(e)
            }
        })();

        (async () => {
            try {
                const response = await axios.get("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/get-refLink", {
                    headers: { Authorization: `${encrypt}` }
                });
                console.log(response);
                setRefMessage(response.data.inviteFriendsMsgCondtruct)
                setRefLink(response.data.refLink)
            }
            catch (e) {
                console.log(e)
            }
        })();

        (async () => {
            try {
                const response = await axios.get("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/list-referred-users", {
                    headers: { Authorization: `${encrypt}` }
                });
                console.log(response);
                // setReferrals(response.data.totalReferees)
                setLoading(false)

            }
            catch (e) {
                console.log(e)

            }
        })()
    }, [])

    const claimInviteChallenge = async (id: string) => {
        let coingif = document.getElementById('coingif') as HTMLElement;
        let coin = document.getElementById('coinaudio') as HTMLAudioElement;
        let params = {
            challenge_id: id,
        };
        let url = "https://evp-referral-service-cea2e4kz5q-uc.a.run.app/claim-challenge";
        try {
            const response = await axios.post(url, params, {
                headers: { Authorization: `${encrypt}` }
            });
            let res = response.data;
            playAudio(coin)
            coingif.style.display = 'block';
            setError(true);
            setErrMessage({ type: 'success', message: response.data.message });
            setTimeout(() => {
                setError(false);
            }, 2000)
        } catch (error: any) {
            setError(true);
            setErrMessage({ type: 'error', message: error.response.data.message });
            setTimeout(() => {
                setError(false);
            }, 2000)
        }
    }

    return (
        <TelegramLayout>
            <div className="bg-cover overflow-hidden bg-[url('/telegram/bg2.png')] flex flex-col justify-center items-start pt-10 text-[#EDF9D0] h-full w-screen" >
                {error &&
                    <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
                }
                <div className='w-screen space-y-8'>
                    <div className='text-center flex flex-col justify-center items-center space-y-4 '>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Your Frens</h2></div>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <Image src='/telegram/frens/frensimg.png' alt='' width={58} height={58} priority />
                                <p className='font-gameria text-[40px]'>{referrals} FRENS</p>
                            </div>

                        </div>
                        <Image src='/telegram/dashpage/howbtn.png' alt='' width={130} height={58} priority />

                    </div>

                    <div className='px-4 space-y-3'>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='w-full border-[#374C07] border rounded-3xl p-3 justify-center items-center'>

                                <div className='space-y-4'>
                                    <h2 className='font-gameria text-[24px]'>Referral Link</h2>
                                    <p className='text-[#EDF9D0] w-10/12'>Invite your frens and get bonuses!</p>
                                    <div className='flex flex-row justify-between items-center border-[#A5E314] border p-1 rounded-lg '>
                                        <span>
                                            {loading ? <CircularProgress color="inherit" size={14} /> : <>
                                                {`${refLink.slice(0, 20)}...${refLink.slice(30, refLink.length)}`}
                                            </>}

                                        </span>
                                        <CopyAll onClick={() => copyClip(refLink)} className='text-[18px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='px-4 space-y-4'>
                        <div className='flex flex-col  border-[#374C07] border rounded-2xl items-center'>
                            <div className='p-4 border-b-[#374C07]' >
                                <h2 className='font-gameria text-[24px]'>3000 Coins for Invite</h2>
                                <p>You will get 3000 coins for every invite. Reach thresholds and claim bonuses</p>
                            </div>
                            <div className='space-y-4 w-full p-2'>

                                {referralList.map((item, index) => {
                                    let percent = (referrals / parseInt(item.referralExpectation)) * 100;
                                    return (
                                        <div key={`${index} ${item.challenge_title}`} className=' border bg-[#10130d]  border-[#476116]/50 p-2 rounded-2xl'>
                                            <div className='flex  flex-row justify-between items-center w-full gap-2   p-2'>
                                                <div className=''>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <Image src='/telegram/dashpage/greencoin.png' alt='' width={20} height={20} priority />
                                                        <h2 className='text-[16px] font-bold'>{item.challenge_title}</h2>
                                                    </div>
                                                    <div className='left-[15px] relative'>
                                                        <div className='flex flex-row justify-start items-center'>
                                                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                                                            <p className='text-white text-[24px] font-gameria font-bold'>+{Number(item.amount).toLocaleString()}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div onClick={() => claimInviteChallenge(item.challenge_id)} className={`rounded-full p-2 font-bold   text-[#20251A] text-[12px] ${item.status == "UNCLAIMED" ? "bg-[#A5E314]" : "bg-[#A5E314]/30 "} `}>
                                                    {item.status == "UNCLAIMED" ? <>

                                                        Claim < ArrowForward className='text-[12px]' /> </> :
                                                        <>
                                                            Claimed <CheckCircleOutline />
                                                        </>
                                                    }
                                                </div>

                                            </div>
                                            <div className='w-full'>
                                                <div className=' bg-[#374C07] w-full m-auto p-1 rounded-full'>
                                                    <div style={{ width: `${percent}%` }} className='h-[14px]  bg-gradient-to-b from-[#A5E314] rounded-full'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>

                    </div>

                    <div className='flex flex-col justify-center p-4 gap-3 items-center'>

                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image src='/telegram/frens/frens.png' alt='' width={115} height={24} priority />
                            <Image
                                src={'/images/emptystate.png'}
                                width={571}
                                height={363}
                                priority
                                alt="" />

                            <h2 className='text-[#52710A] text-[16px] text-center'>
                                We haven’t found any users that joined the game
                                with your invite code. Invite friends to receive bonuses!
                            </h2>
                        </div>

                        <a
                            target='_blank'
                            href={`https://t.me/share/url?url=${refLink}&text=${refMessage}`}
                            className={`flex bg-[#A5E314] gap-2  border-[#52710A] border-t-4 hover:border-t-0 hover:border-b-4 w-full p-3 rounded-2xl flex-row justify-center text-black font-bold items-center `}>
                            <Image src='/telegram/social/telegram.png' alt='' width={24} height={24} priority /> Invite Frens
                        </a>

                    </div>
                </div >

            </div >
        </TelegramLayout>
    )
}
