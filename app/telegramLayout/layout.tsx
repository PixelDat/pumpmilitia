import React, { ReactNode } from 'react'
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import { usePathname } from 'next/navigation';
import { ArrowBack, Close, MoreVert } from '@mui/icons-material';
import { white } from 'colorette';

interface Props {
    readonly children: ReactNode;
}
function TelegramLayout({ children }: Props) {

    const path = usePathname();
    const closeBot = () => {

    }
    return (
        <div className=''>
            <div className='w-full bg-black/50 text-white flex flex-row justify-between items-end fixed px-4 pt-5 '>
                <div className='flex flex-row justify-center gap-4'>
                    {
                        path == "/telegram-dash" ?
                            <div onClick={() => { closeBot() }}>
                                <Close sx={{ color: 'white', }} />
                            </div>
                            :
                            <div onClick={() => { history.back() }}>
                                <ArrowBack sx={{ color: 'white', }} />
                            </div>
                    }
                    <h2 className='font-bold'>PumpMilitia Coin</h2>
                </div>

                <div onClick={() => { history.back() }}>
                    <MoreVert />
                </div>
            </div>
            {children}
            {(path !== '/telegram-pumpearn' && path !== '/telegram-boosters' && path !== '/telegram-frens') &&
                <div className=''>
                    <NavigationComp />
                </div>
            }
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