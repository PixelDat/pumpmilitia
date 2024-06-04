import Image from 'next/image'
import React from 'react'

interface IconButtonType {
    icon: string;
    text: string;
    key: string;
    url: string;
}
const IconButton: React.FC<IconButtonType> = ({ icon, text, key, url }) => {
    return (
        <div key={key} onClick={() => { location.href = `${url}` }} className='border-[#A5E314] space-y-4 border-2 rounded-full h-[130px] w-[98px] flex flex-col items-center justify-center'>
            <Image src={icon} alt='' width={48} height={48} priority />
            <p className='font-gameria text-white text-[16px]'>{text}</p>
        </div>
    )
}

export default IconButton;
