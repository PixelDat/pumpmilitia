"use client";
import React, { useEffect, useState } from 'react'
import TelegramBotDash from '../components/telegramPagesComponent/maindash';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import TelegramBoosters from '../components/telegramPagesComponent/boosters';
import TelegramFrens from '../components/telegramPagesComponent/frens';
import TelegramLeague from '../components/telegramPagesComponent/leaugue';
import TelegramPumpEarn from '../components/telegramPagesComponent/earn';
import { ArrowBack } from '@mui/icons-material';

export default function TelegramBotMain() {
    const [selectedPage, setSelectedPage] = useState('dashboard');
    const [pagesArray, setPagesArray] = useState<any>([]);


    useEffect(() => {
        setSelectedPage(pagesArray[pagesArray.length - 1] || 'dashboard');
    }, [])

    useEffect(() => {
        setPagesArray((prevPages: any) => [...prevPages, selectedPage]);
    }, [selectedPage]);

    const goBack = () => {
        let newpages = (prevPages: any) => {
            const newPagesArray = [...prevPages];
            newPagesArray.pop(); // Remove the current page
            return newPagesArray;
        };
        let items = newpages(pagesArray);
        setSelectedPage(items[items.length - 1]);
    };
    return (
        <>
            <div className='w-full bg-transparent text-white flex flex-row justify-between items-end fixed px-4 pt-5 '>
                <div className='flex flex-row justify-center gap-4'>
                    {
                        selectedPage == "dashboard" ?
                            <></>
                            :
                            <div onDoubleClick={() => setSelectedPage('dashboard')} onClick={() => goBack()}>
                                <ArrowBack sx={{ color: 'white', }} />
                            </div>
                    }
                </div>
            </div>
            {selectedPage == 'boosters' ?
                <TelegramBoosters
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                : selectedPage == 'frens' ?
                    <TelegramFrens
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    : selectedPage == 'league' ?
                        <TelegramLeague
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        : selectedPage == 'pumpearn' ?
                            <TelegramPumpEarn
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            : selectedPage == 'dashboard' ?
                                <TelegramBotDash
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                :
                                <TelegramBotDash
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
            }


            {(selectedPage !== 'pumpearn' && selectedPage !== 'boosters' && selectedPage !== 'frens') &&
                <div className=''>
                    <NavigationComp
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            }
        </>
    )
}
