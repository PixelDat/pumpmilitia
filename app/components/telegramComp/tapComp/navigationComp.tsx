import Image from 'next/image';
import React from 'react'
import CircleGauge from './circleguage';
import IconButton from './iconbuttonComp';
let coin = [
    {
        icon: '/telegram/dashpage/yellowcoin.png',
        text: 'Earn',
        url: '/telegram-pumpearn'
    },
    {
        icon: '/telegram/dashpage/boosters.png',
        text: 'Boosters',
        url: '/telegram-boosters'
    },
    {
        icon: '/telegram/dashpage/group.png',
        text: 'Invite',
        url: '/telegram-invite'
    }
]
const NavigationComp = () => {
    const [percent, setPercent] = React.useState(100);
    const updatePercentage = () => {
        setPercent(percent - 10);
    }
    return (
        <div className='fixed bottom-4 left-0 w-full m-auto'>

            <div className='bottom-10  flex flex-row justify-center gap-3  items-center'>
                {coin.map((item, index) => {
                    return (
                        <IconButton url={item.url} key={index.toString()} icon={item.icon} text={item.text} />
                    )
                })}
            </div>
        </div>

    )
}


export default NavigationComp;