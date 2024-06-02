import { ArrowForward, CallMade, Check, Close, CopyAll } from '@mui/icons-material';
import Image from 'next/image'
import React from 'react'
import CustomInput from '../../customInput/customInput';

interface ModalComponent {
    type: string;
    text?: string;
    key?: string;
    setOpened: Function;
    opened: boolean;
}
const CustomModal: React.FC<ModalComponent> = ({ type, text, key, setOpened, opened }) => {
    return (
        <>
            {opened &&
                <div className='' style={{ zIndex: 20, }}>
                    {type == 'taskModal' ?
                        <div className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
                            {/* <Image src={icon} alt='' width={58} height={58} priority /> */}
                            <div className='bg-[#20251A] h-content py-5 w-full bottom-0 absolute rounded-t-3xl p-3'>

                                <div className='w-full flex flex-col justify-center text-[#EDF9D0] items-center '>
                                    <div className='w-[30px]  bg-[#C3EC62] h-[3px] rounded-full'></div>
                                    <div onClick={() => setOpened(!opened)} className='justify-end w-full flex flex-row'>
                                        <Close />
                                    </div>
                                    <div className='flex flex-col justify-center items-center space-y-4 '>

                                        <Image src='/telegram/social/telegram.png' alt='' width={113} height={113} priority />

                                        <h2 className='font-gameria text-[24px]'>Follow Telegram Channel</h2>

                                        <p className='text-center'>Click on the link in the task and subscribe to the Telegram channel where youll land</p>
                                        <div className='flex flex-row justify-center items-center'>
                                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                            <p className='font-gameria text-[40px]'> +10,000</p>
                                        </div>

                                        <div className='rounded-3xl flex flex-row justify-center items-center gap-3 w-full border border-[#C3EC62] p-3'>
                                            <Check className='bg-[#C3EC62] text-black rounded-full' />
                                            <p className='text-center text-[14px]'>The task is completed! continue to next tasks </p>
                                        </div>
                                        <div className='flex flex-row justify-center items-center font-gameria text-[#C3EC62]'>
                                            View <CallMade />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        : type == "turboModal" ?
                            < div onClick={() => setOpened(false)} className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
                                {/* <Image src={icon} alt='' width={58} height={58} priority /> */}
                                <div className='bg-[#20251A] h-content py-5 w-full bottom-0 absolute rounded-t-3xl p-3'>

                                    <div className='w-full flex flex-col justify-center text-[#EDF9D0] items-center '>
                                        <div className='w-[30px]  bg-[#C3EC62] h-[3px] rounded-full'></div>
                                        <div className='flex flex-col justify-center items-center space-y-4 pt-5'>

                                            <Image src='/telegram/social/telegram.png' alt='' width={113} height={113} priority />

                                            <h2 className='font-gameria text-[24px]'>Follow Telegram Channel</h2>

                                            <p className='text-center'>Click on the link in the task and subscribe to the Telegram channel where youll land</p>
                                            <div className='flex flex-row justify-center items-center'>
                                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                                <p className='font-gameria text-[40px]'> +10,000</p>
                                            </div>

                                            <div className='rounded-3xl flex flex-row justify-center items-center gap-3 w-full border border-[#C3EC62] p-3'>
                                                <Check className='bg-[#C3EC62] text-black rounded-full' />
                                                <p className='text-center text-[14px]'>The task is completed! continue to next tasks </p>
                                            </div>
                                            <div className='flex flex-row justify-center items-center font-gameria text-[#C3EC62]'>
                                                View <CallMade />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            : type == "dashModal" &&
                            <div className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
                                {/* <Image src={icon} alt='' width={58} height={58} priority /> */}

                                <div className='bg-[#20251A] h-content py-5 w-full bottom-0 absolute rounded-t-3xl p-3'>

                                    <div className='w-full z-50 flex flex-col justify-center text-[#EDF9D0] items-center '>
                                        <div className='flex flex-col justify-center items-center space-y-4 '>

                                            <Image src='/telegram/bgphon.png' alt='' width={228} height={133} priority />

                                            <h2 className='font-gameria text-[24px]'>Pump militia</h2>

                                            <p className='text-center'>
                                                Before proceeding to earning more coins, download and log into Pump Militia Game
                                            </p>
                                            <div className='flex flex-col justify-center items-center'>
                                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                                <p className='font-gameria text-[40px]'> +10,000</p>
                                                <p className='font-gameria text-[16px]'> (+100,000 in-game bonus)</p>
                                            </div>

                                            <div className='w-full'>
                                                <CustomInput
                                                    type='text'
                                                    placeholder='Referral Code'
                                                    addOnEnd={<CopyAll color='inherit' />}
                                                />
                                            </div>
                                            <div className='flex bg-[#A5E314] w-full p-3 rounded-2xl flex-row justify-center text-black font-bold items-center '>
                                                Download <ArrowForward />
                                            </div>
                                            <div className='flex bg-[#52710A] w-full p-3 rounded-2xl flex-row justify-center items-center '>
                                                Continue
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                    }
                </div>
            }
        </>

    )
}

export default CustomModal;
