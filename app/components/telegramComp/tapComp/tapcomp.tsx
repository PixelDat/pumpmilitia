import Image from 'next/image';
import React from 'react'

const Tapcomponent = () => {
    return (
        <div className='text-[#A5E314]'>

            <div className='flex flex-row items-center'>
                <div className='bg-[#10130D] flex flex-row z-10 items-center justify-center gap-2 border-[#A5E314] border-2 p-2 rounded-3xl' >
                    <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                    <div className='flex flex-col leading-tight' >
                        <span className='text-[16px]'>1000</span>
                        <span className='text-[16px]'>/1000</span>
                    </div>
                </div>

                <div className=' bg-[#374C07] -left-[10px] relative z-0 w-[300px] p-1 rounded-r-full'>
                    <div className='h-[16px] bg-gradient-to-b from-[#A5E314] rounded-r-full'>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Tapcomponent;