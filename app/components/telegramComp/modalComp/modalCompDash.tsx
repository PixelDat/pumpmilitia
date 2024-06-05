import { ArrowForward, CallMade, Check, Close, CopyAll } from '@mui/icons-material';
import Image from 'next/image'
import React from 'react'
import CustomInput from '../../customInput/customInput';

interface ModalComponent {
    text?: string;
    key?: string;
    setOpened: Function;
    signedIn: boolean;
    opened: boolean;
}
const DashBoardModal: React.FC<ModalComponent> = ({ signedIn, text, key, setOpened, opened }) => {
    const checkIfSignedIn = () => {
        setOpened(false);
    }
    return (
        <>
            {opened &&
                <div className='' >
                    <div className='fixed top-0 h-screen w-screen z-50 bg-black/50 flex flex-col items-center justify-center'>
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
                                        <p className='font-gameria text-[32px]'> +10,000</p>
                                        <p className='font-gameria text-[16px]'> (+100,000 in-game bonus)</p>
                                    </div>
                                    <p className='text-center'>USE THE REFERRAL CODE TO LOGIN TO THE PUMPMILITIA GAME</p>
                                    <div className='w-full'>
                                        <CustomInput
                                            type='text'
                                            placeholder='Referral Code'
                                            addOnEnd={<CopyAll color='inherit' />}
                                        />
                                    </div>

                                    <div className={`flex bg-[#A5E314]  border-[#52710A] border-t-4 hover:border-t-0 hover:border-b-4 w-full p-3 rounded-2xl flex-row justify-center text-black font-bold items-center `}>
                                        Download <ArrowForward />
                                    </div>

                                    <div onClick={() => { checkIfSignedIn() }} className='flex bg-[#52710A] border-[#A5E314] border-b-4 hover:border-b-0 hover:border-t-4 w-full p-3 rounded-2xl flex-row justify-center items-center '>
                                        Continue
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default DashBoardModal;
