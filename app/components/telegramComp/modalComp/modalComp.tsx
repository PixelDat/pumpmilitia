import { ArrowForward, CallMade, Check, Close, CopyAll } from '@mui/icons-material';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../customInput/customInput';
import { tasks } from '@/app/telegram-pumpearn/utils';
import { taskCompleted } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';

interface ModalComponent {
    taskIndex: number;
    text?: string;
    key?: string;
    setOpened: Function;
    opened: boolean;
}
const CustomModal: React.FC<ModalComponent> = ({ taskIndex, text, key, setOpened, opened }) => {
    const [taskDetails, setTaskDetails] = useState(tasks[taskIndex]);
    const [taskClicked, setTaskClicked] = useState(false)
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [confirmComplete, setComfirmComplete] = useState(true)
    useEffect(() => {
        setTaskDetails(tasks[taskIndex]);
        setTaskClicked(false)
    }, [taskIndex])


    return (
        <>
            {opened &&
                <div className='' style={{ zIndex: 20, }}>
                    <div className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
                        {/* <Image src={icon} alt='' width={58} height={58} priority /> */}
                        <div className='bg-[#20251A] h-content py-5 w-full bottom-0 absolute rounded-t-3xl p-3'>
                            {confirmComplete ?
                                <div className='w-full flex flex-col justify-center text-[#EDF9D0] items-center '>
                                    <div className='w-[30px]  bg-[#C3EC62] h-[3px] rounded-full'></div>
                                    <div onClick={() => {
                                        setComfirmComplete(false)
                                        setTaskClicked(false)
                                        setOpened(!opened)
                                    }} className='justify-end w-full flex flex-row'>
                                        <Close />
                                    </div>
                                    <div className='flex flex-col justify-center items-center space-y-4 '>
                                        <Image src='/telegram/dashpage/grinch.png' alt='' width={113} height={209} />


                                        <h2 className='font-gameria text-[24px] text-center'>Make Sure you complete the task</h2>

                                        <p className='text-center'>In campaigns, you’re supposed to complete all the
                                            tasks. If we see that you’re cheating (including unfollowing media), you’ll be penalized with <span className='text-[#A5E314]'>twice the coins</span> </p>
                                        <div className='flex flex-row justify-center items-center bg-[#10130D] border border-[#374C07] rounded-3xl w-full h-[165px] divide-x '>
                                            <div className='flex flex-col justify-center p-3'>
                                                <p className='font-gameria text-center text-[20px]'>+{taskDetails.amount}</p>
                                                <p className='text-center'>Coins rewards for tasks completed</p>

                                            </div>
                                            <div className='flex flex-col justify-center p-3'>
                                                <p className='font-gameria text-center text-red-600 text-[20px]'>+{(Number(taskDetails.amount.replace(',', '')) * 2).toLocaleString()}</p>
                                                <p className='text-center'>Coins rewards for tasks completed</p>

                                            </div>
                                        </div>

                                        <>
                                            <button onClick={() => { setTaskClicked(true) }} className='w-full rounded-full bg-[#A5E314] p-4 font-gameria text-[#374C07]'>Yes Completed</button>
                                            <div onClick={() => {
                                                setComfirmComplete(false)
                                                setTaskClicked(false)
                                            }}
                                                className='flex flex-row justify-center items-center font-gameria text-[#C3EC62]'>
                                                Check Again
                                            </div>

                                        </>



                                    </div>

                                </div>
                                :
                                <div className='w-full flex flex-col justify-center text-[#EDF9D0] items-center '>
                                    <div className='w-[30px]  bg-[#C3EC62] h-[3px] rounded-full'></div>
                                    <div onClick={() => setOpened(!opened)} className='justify-end w-full flex flex-row'>
                                        <Close />
                                    </div>
                                    <div className='flex flex-col justify-center items-center space-y-4 '>
                                        {taskDetails.title.includes('Telegram') ?

                                            <Image src='/telegram/social/telegram.png' alt='' width={113} height={113} priority />
                                            : taskDetails.title.includes('X') ?
                                                <Image src='/telegram/social/xicon.png' alt='' width={113} height={113} priority />
                                                : taskDetails.title.toLowerCase().includes('tiktok') ?
                                                    <Image src='/telegram/social/tiktok.jpeg' alt='' width={113} height={113} priority />
                                                    : taskDetails.title.includes('Instagram') ?
                                                        < Image src='/telegram/social/instagram.png' alt='' width={113} height={113} priority />
                                                        :
                                                        <Image src='/telegram/social/youtube.png' alt='' width={113} height={113} priority />

                                        }

                                        <h2 className='font-gameria text-[24px]'>{taskDetails.title}</h2>

                                        <p className='text-center'>Click on the link in the task and {taskDetails.title} channel where you'll land</p>
                                        <div className='flex flex-row justify-center items-center'>
                                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                            <p className='font-gameria text-[40px]'> +{taskDetails.amount}</p>
                                        </div>

                                        {!taskClicked &&
                                            <>
                                                <div className='bg-[#A5E314]/20 p-3 rounded-3xl flex flex-row justify-between items-start gap-2'>
                                                    <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={20} height={20} priority />
                                                    <p>Once you complete the task, return to the app
                                                        and confirm with the button below</p>
                                                </div>
                                                <button onClick={() => { setTaskClicked(true) }} className='w-full rounded-full bg-[#A5E314] p-4 font-gameria text-[#374C07]'>{taskDetails.title}</button>
                                            </>
                                        }
                                        {
                                            taskClicked &&
                                            <>
                                                <button onClick={() => setComfirmComplete(true)} className='w-full rounded-full bg-[#A5E314] p-4 font-gameria text-[#374C07]'>Mark as Completed</button>

                                                <div onClick={() => setTaskClicked(false)} className='flex flex-row justify-center items-center font-gameria text-[#C3EC62]'>
                                                    View <CallMade />
                                                </div>
                                            </>
                                        }
                                        {taskCompleted &&
                                            <>
                                                <div className='rounded-3xl flex flex-row justify-center items-center gap-3 w-full border border-[#C3EC62] p-3'>
                                                    <Check className='bg-[#C3EC62] text-black rounded-full' />
                                                    <p className='text-center text-[14px]'>The task is completed! continue to next tasks </p>
                                                </div>
                                                <div onClick={() => setOpened(false)} className='flex flex-row justify-center items-center font-gameria text-[#C3EC62]'>
                                                    View <CallMade />
                                                </div>
                                            </>
                                        }
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default CustomModal;
