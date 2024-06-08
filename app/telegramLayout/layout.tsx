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