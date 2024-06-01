import { CallMade, Check } from '@mui/icons-material';
import Image from 'next/image'
import React from 'react'

interface ModalComponent {
    type: string;
    text?: string;
    key?: string;
}
const CustomModal: React.FC<ModalComponent> = ({ type, text, key }) => {
    const [opened, setOpened] = React.useState(false);
    return (
        <div className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
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
    )
}

export default CustomModal;
