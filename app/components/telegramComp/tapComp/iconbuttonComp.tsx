import Image from 'next/image'
import React from 'react'

interface IconButtonType {
    icon: string;
    text: string;
    key: string;
    url: string;
    gif: string;
}
const IconButton: React.FC<IconButtonType> = ({ icon, gif, text, key, url }) => {
    return (
        <div key={key} onClick={() => { location.href = `${url}` }} className='border-[#A5E314] overflow-hidden relative space-y-4 border-2 rounded-full h-[130px] w-[98px] flex flex-col items-center justify-center'>
            {text == "Boosters" ? <Image src={gif} alt='' className='absolute ' fill priority unoptimized /> :
                <Image src={icon} alt='' width={48} height={48} priority />}

            {text == "Boosters" ? <div className='h-[38px] w-[40px]'></div> :
                <Image src={gif} alt='' className='' fill priority unoptimized />}

            <p className='font-gameria text-white text-[16px]'>{text}</p>
        </div>
    )
}

export default IconButton;
