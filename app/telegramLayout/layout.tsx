import React, { ReactNode } from 'react'
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import { usePathname } from 'next/navigation';
import { ArrowBack } from '@mui/icons-material';

interface Props {
    readonly children: ReactNode;
}
function TelegramLayout({ children }: Props) {

    const path = usePathname();
    return (

        <div >
            <div className=''>
                <span onClick={() => { history.back() }}>
                    <ArrowBack />
                </span>
            </div>
            <div className='flex flex-col justify-between items-center space-y-8'>
                {children}
            </div>
            {path != '/telegram-pumpearn' &&
                <div className=''>
                    <NavigationComp />
                </div>
            }

        </div>

    )
}

export default TelegramLayout