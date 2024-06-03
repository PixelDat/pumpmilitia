"use client";
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { authUser } from './utils';

export default function TelegramBot() {
    const [loadingPage, setLoadingPage] = useState(true)
    const params = useSearchParams();
    let tg_username = params.get('tg_username');
    let uniqueId = params.get('uniqueID');


    useEffect(() => {
        async function AuthUser() {
            if (tg_username && uniqueId) {

                const result = await authUser(tg_username, uniqueId)
                console.log(result);
                if (result?.status) {
                    location.href = '/telegram-dash';
                }
            }
        }
        AuthUser();

    }, [])
    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')] h-screen w-screen" >


            <div className='flex flex-row justify-center items-center h-screen m-auto'>
                <div className='space-y-4'>
                    <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/grinch.png' alt='' width={199} height={209} />
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/loadingtxt.png' alt='' width={199} height={209} />
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <span className='text-white'>Downloading Pumps,please wait a bit</span><span>
                            <Image src='/telegram/dashpage/moneybag.png' alt='' width={24} height={24} />
                        </span>
                    </div>


                </div>

            </div>





        </div >
    )
}
