"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, CancelOutlined, CheckCircle, CheckCircleOutline, CopyAll, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import IconButton from '../telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../telegramComp/tapComp/navigationComp';
import CustomModal from '../telegramComp/modalComp/modalComp';
import { ToastComponent } from '../toastComponent/toastComponent';
import axios from 'axios';
import TelegramLayout from '@/app/telegramLayout/layout';
import { playAudio, stopAudio } from '@/lib/utils/request';
import { Avatar, CircularProgress } from '@mui/material';
import { ReferralItem, boost } from '@/app/telegram-frens/utils';
const Cookies = require("js-cookie");

type Referral = {
    created_at: string;
    email: string;
};

interface NavProps {
    selectedPage: string;
    setSelectedPage: (selectedPage: string) => void;
}

const TelegramFrens: React.FC<NavProps> = (props) => {
    const { setSelectedPage } = props;
    const [referralList, setReferralList] = useState([] as ReferralItem[]);
    const [opened, setOpened] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [refLink, setRefLink] = useState('')
    const [refMessage, setRefMessage] = useState('')
    const [update, setUpdate] = useState(0);
    const [referrals, setReferrals] = useState<Referral[]>([]);

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
                console.error(e)
            }
        })();

        (async () => {
            try {
                const response = await axios.get("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/get-refLink", {
                    headers: { Authorization: `${encrypt}` }
                });
                setRefMessage(response.data.inviteFriendsMsgCondtruct)
                setRefLink(response.data.refLink)
                setLoading(false)
            }

            catch (e) {
                console.error(e)
                setLoading(false)

            }
        })();

        (async () => {
            try {
                const response = await axios.get("https://evp-referral-service-cea2e4kz5q-uc.a.run.app/list-referred-users", {
                    headers: { Authorization: `${encrypt}` }
                });
                console.log(response.data);
                setReferrals(response.data);

            }
            catch (e) {
                console.error(e)

            }
        })()
    }, [update])

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
                coingif.style.display = 'none';
                stopAudio(coin)
            }, 3000)
            setUpdate(Math.random())
        } catch (error: any) {
            setError(true);
            setErrMessage({ type: 'error', message: error.response.data.message });
            setTimeout(() => {
                setError(false);
            }, 2000)
        }
    }

    return (

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
                            <p className='font-gameria text-[40px]'>{referrals.length} FRENS</p>
                        </div>

                    </div>
                    <a href='pump://pumpmilitia.app' target='_blank'>
                        <Image src='/telegram/dashpage/playbtn.png' alt='' width={171} height={84} priority />
                    </a>

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
                            <h2 className='font-gameria text-[24px]'>10,000 Coins for Invite</h2>
                            <p>You will get 10,000 coins for every invite. Reach thresholds and claim bonuses</p>
                        </div>
                        <div className='space-y-4 w-full p-2'>

                            {referralList.map((item, index) => {
                                let percent = Math.min((referrals.length / parseInt(item.referralExpectation)) * 100, 100);
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

                                            <div onClick={() => claimInviteChallenge(item.challenge_id)} className={`rounded-full p-2 font-bold cursor-pointer  text-[#20251A] text-[12px] ${item.status == "UNCLAIMED" ? "bg-[#A5E314]" : "bg-[#A5E314]/30 "} `}>
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
                    {referrals.length <= 0 ?
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
                        :
                        <div className='border  border-[#52710A]/50 p-3 rounded-xl mb-14 w-full '>
                            <h2 className='text-center font-gameria text-[24px]'>{referrals.length} Frens Invited</h2>
                            <div className='space-y-4 '>
                                {referrals.map((referral, index) => {
                                    return (
                                        <div key={index} className='flex flex-row justify-start items-center gap-3'>
                                            <Avatar src={'/telegram/frens/defaultdp.png'} className='border border-[#52710A] p-2' sx={{ width: 56, height: 56 }} />
                                            <h2 className='text-[20px] font-bold '>{referral?.email}</h2>
                                        </div>)
                                })}

                            </div>

                        </div>}



                </div>
            </div >
            <div className='fixed bottom-5  w-full  m-auto'>
                <a
                    target='_blank'
                    href={`https://t.me/share/url?url=${refLink}&text=${refMessage}`}
                    className={`flex bg-[#A5E314] gap-2  border-[#52710A] border-t-4 hover:border-t-0 hover:border-b-4 w-10/12 m-auto p-3 rounded-2xl flex-row justify-center text-black font-bold items-center `}>
                    <Image src='/telegram/social/telegram.png' alt='' width={24} height={24} priority /> Invite Frens
                </a>
            </div>

        </div >
    )
}

export default TelegramFrens;
