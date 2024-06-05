import { ArrowForward, CallMade, Check, Close, CopyAll, Rocket } from '@mui/icons-material';
import Image from 'next/image'
import React from 'react'
import CustomInput from '../../customInput/customInput';

interface ModalComponent {
    text?: string;
    title?: string;
    key?: string;
    setOpened: Function;
    opened: boolean;
    selectedBoost?: string;
}
const TurboModal: React.FC<ModalComponent> = ({ selectedBoost, text, title, key, setOpened, opened }) => {
    return (
        <>
            {opened &&
                <div className='' style={{ zIndex: 20, }}>
                    < div className='fixed top-0 h-screen w-screen bg-black/50 flex flex-col items-center justify-center'>
                        {/* <Image src={icon} alt='' width={58} height={58} priority /> */}
                        <div className='bg-[#20251A] h-content py-5 w-full bottom-0 absolute rounded-t-3xl p-3'>

                            <div className='w-full flex flex-col justify-center text-[#EDF9D0] items-center '>
                                <div className='w-[30px]  bg-[#C3EC62] h-[3px] rounded-full'></div>
                                <div onClick={() => setOpened(!opened)} className='justify-end w-full flex flex-row'>
                                    <Close />
                                </div>
                                <div className='flex flex-col justify-center items-center space-y-4 pt-5'>
                                    {selectedBoost == "Blast" ?
                                        <Image src='/telegram/boost/turbo.png' alt='' width={230} height={230} priority />
                                        : selectedBoost == "Reload" ?
                                            <Image src='/telegram/boost/reload.png' alt='' width={230} height={230} priority />
                                            :
                                            <Image src='/telegram/boost/play.png' alt='' width={230} height={230} priority />

                                    }
                                    <h2 className='font-gameria text-[24px]'>
                                        {selectedBoost == "Blast" ? "Blast Attack" : selectedBoost == "Reload" ? "Reload Boost" : "Play Pump Militia"}

                                    </h2>

                                    <p className='text-center'>
                                        Enter Turbo Mode and Fight with ten times the damage! You can only enable the Turbo Mode for 10 seconds
                                    </p>
                                    <div className='flex flex-row justify-center items-center'>
                                        <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={40} height={40} priority />
                                        <p className='font-gameria text-[24px]'>FREE</p>
                                    </div>



                                    <div className='rounded-3xl flex bg-[#A5E314] hover:border-t-4 hover:border-b-0   text-black flex-row justify-center items-center gap-3 w-full border-b-4 border-[#52710A] p-3'>
                                        <Rocket className='rotate-45 text-black' />
                                        <p className='text-center font-bold text-[14px]'>Claim {selectedBoost !== "Play" && selectedBoost} Boost </p>
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

export default TurboModal;
