import Image from 'next/image';
import React, { ReactNode } from 'react'
import CircleGauge from './circleguage';
import IconButton from './iconbuttonComp';
import { SettingsCellOutlined } from '@mui/icons-material';
let coin = [
    {
        icon: '/telegram/dashpage/yellowcoin.png',
        gif: '/telegram/dashpage/coinsmove.gif',

        text: 'Earn',
        url: '/telegram-pumpearn'
    },
    {
        icon: '/telegram/dashpage/boosters.png',
        gif: '/telegram/dashpage/booster.gif',

        text: 'Boosters',
        url: '/telegram-boosters'
    },
    {
        icon: '/telegram/dashpage/group.png',
        gif: '/telegram/dashpage/confeti.gif',

        text: 'Invite',
        url: '/telegram-frens'
    }

]

interface NavProps {
    selectedPage?: string;
    setSelectedPage?: (selectedPage: string) => void;

}
const NavigationComp: React.FC<NavProps> = (props) => {
    const { selectedPage, setSelectedPage } = props;

    const changeUrl = (item: string) => {
        if (setSelectedPage) {
            if (item == '/telegram-pumpearn') {
                setSelectedPage('pumpearn');
            } else if (item == '/telegram-frens') {
                setSelectedPage('frens');
            } else {
                setSelectedPage('boosters');
            }
        }
    }
    return (
        <div className='fixed bottom-4 left-0 w-full m-auto'>

            <div className='bottom-10  flex flex-row justify-center gap-3  items-center'>
                {coin.map((item, index) => {
                    return (
                        <IconButton onClick={() => changeUrl(item.url)} url={item.url} key={index.toString()} icon={item.icon} gif={item.gif} text={item.text} />
                    )
                })}
            </div>
        </div>

    )
}


export default NavigationComp;