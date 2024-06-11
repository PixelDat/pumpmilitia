import { ArrowForward, CallMade, CancelOutlined, Check, CheckCircle, Close, CopyAll } from '@mui/icons-material';
import Image from 'next/image'
import React, { useState } from 'react'
import CustomInput from '../../customInput/customInput';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { ToastComponent } from '../../toastComponent/toastComponent';
const Cookies = require("js-cookie");


interface ModalComponent {
    text?: string;
    key?: string;
    setOpened: Function;
    signedIn: boolean;
    opened: boolean;
    referralId?: string;
}
const DashBoardModal: React.FC<ModalComponent> = ({ referralId, signedIn, text, key, setOpened, opened }) => {
    let encrypt = Cookies.get('encrypt_id');

    const [clickedDownload, setClickedDownload] = React.useState(true);

    const [error, setError] = useState(false)
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


    const checkIfSignedIn = async () => {
        if (!clickedDownload) return;
        setLoading(true);
        let url = "https://evp-referral-service-cea2e4kz5q-uc.a.run.app/claim-game-download-reward";
        try {
            const response = await axios.post(url, {}, {
                headers: { Authorization: `${encrypt}` }
            });
            setLoading(false);
            console.log(response);
            setError(true);
            setErrMessage({ type: 'success', message: response.data.message });
            setTimeout(() => {
                setError(false);
            }, 2000)
            setOpened(false);

        } catch (error: any) {
            setLoading(false);
            console.log(error.response.data.message)
        }
    }
    const [loading, setLoading] = React.useState(false);
    return (
        <>
            {opened &&
                <div className='' >
                    <div className='fixed top-0 h-screen w-screen z-50 bg-black/50 flex flex-col items-center justify-center'>
                        {error &&
                            <ToastComponent addOnStart={errMessage.type == 'success' ? <CheckCircle color="inherit" /> : <CancelOutlined color='inherit' />} content={errMessage.message} type={errMessage.type} />
                        }

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
                                            value={referralId || ""}
                                            type='text'
                                            placeholder='Referral Code'
                                            addOnEnd={
                                                <span onClick={() => copyClip(referralId || "")}>
                                                    <CopyAll color='inherit' />
                                                </span>
                                            }
                                        />
                                    </div>

                                    <a onClick={() => {
                                        setLoading(true)
                                        setClickedDownload(true)
                                        setTimeout(() => {
                                            setLoading(false)
                                        }, 3000)
                                    }} href="https://play.google.com/store/apps/details?id=com.everpumpstudio.pumpmilitia&hl=en_US&gl=US" className={`flex bg-[#A5E314]  border-[#52710A] border-t-4 hover:border-t-0 hover:border-b-4 w-full p-3 rounded-2xl flex-row items-center gap-x-2 justify-center text-black font-bold items-center `}>
                                        <Image src="/telegram/frens/icongame.png" height={24} width={24} alt='Iconsss' />   Download <ArrowForward />
                                    </a>

                                    <div onClick={() => checkIfSignedIn()} className={`${!clickedDownload ? "blur-[2px]" : ""} flex bg-[#52710A] border-[#A5E314] border-b-4 hover:border-b-0 hover:border-t-4 w-full p-3 rounded-2xl flex-row justify-center items-center `}>
                                        {loading ? <CircularProgress color='inherit' size={14} /> : "Continue"}
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
