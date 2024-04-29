import Image from 'next/image'
import React from 'react'
import '../../styles/mine.css';

export default function BlipNinja() {
    return (
        <div className="mx-4 mb-8" style={{ position: 'relative' }}>
            <div className="loader">
            </div>
            <Image
                style={{ position: 'absolute', top: -28, }}
                src={"/svg/icon_logo_2.svg"}
                width={69}
                height={69}
                alt=""
                priority
            />
        </div>
    )
}
