"use client";
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { authUser } from './utils';
const Cookies = require("js-cookie");


export default function TelegramBot() {
    const [loadingPage, setLoadingPage] = useState(true)
    const params = useSearchParams();
    let tg_username = params.get('tg_username');
    let uniqueId = params.get('uniqueID');


    useEffect(() => {
        if (tg_username && uniqueId) {
            Cookies.set("encrypt_id", uniqueId);
            location.href = '/telegram-dash'
        }
    }, [tg_username, uniqueId])
    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')] h-screen w-screen" >


            <div className='flex flex-row justify-center items-center h-screen m-auto'>
                <div className='space-y-4'>
                    <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/loader.png' alt='' width={355} height={272} />
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <Image src='/telegram/dashpage/loadingtxt.png' alt='' width={147} height={31} />
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
