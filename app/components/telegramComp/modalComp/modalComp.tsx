import Image from 'next/image'
import React from 'react'

interface ModalComponent {
    icon: string;
    text: string;
    key: string;
}
const CustomModal: React.FC<ModalComponent> = ({ icon, text, key }) => {
    return (
        <div className='border-[#A5E314] border rounded-full h-[128px] w-[98px] flex flex-col items-center justify-center'>
            <Image src={icon} alt='' width={58} height={58} priority />
            <p className='font-gameria text-white text-[16px]'>{text}</p>
        </div>
    )
}

export default CustomModal;
