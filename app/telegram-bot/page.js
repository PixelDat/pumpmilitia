import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function TelegramBot() {
    const [loadingPage, setLoadingPage] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoadingPage(false);
        }, 1000)
    }, [])
    return (
        <div className="bg-cover overflow-hidden bg-[url('/telegram/homepage.png')] h-screen w-screen" >

            {loadingPage &&
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
            }


        </div >
    )
}
