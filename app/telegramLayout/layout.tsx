import React, { ReactNode, useState } from 'react'
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import { usePathname } from 'next/navigation';
import { ArrowBack, Close, MoreVert } from '@mui/icons-material';
import { white } from 'colorette';
import TelegramBotDash from '../telegram-dash/page';

interface Props {
    readonly children: ReactNode;
}
function TelegramLayout({ children }: Props) {

    const [selectedPage, setSelectedPage] = useState('dahboard')
    const path = usePathname();
    const closeBot = () => {

    }
    return (
        <div className=''>
            <div className='w-full bg-transparent text-white flex flex-row justify-between items-end fixed px-4 pt-5 '>
                <div className='flex flex-row justify-center gap-4'>
                    {
                        path == "/telegram-dash" ?
                            <></>
                            :
                            <div onClick={() => { history.back() }}>
                                <ArrowBack sx={{ color: 'white', }} />
                            </div>
                    }
                </div>
            </div>

            {children}

        </div>

    )
}

export default TelegramLayout


interface NavComp {
    path: string;
}

const NavComp: React.FC<NavComp> = ({ path }) => {
    return (
        <>
            {
                (path !== '/telegram-pumpearn' && path !== '/telegram-boosters') && (
                    <div className=''>
                        <NavigationComp />
                    </div>
                )
            }
        </>
    );
};