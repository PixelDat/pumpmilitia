"use client";
import React, { useEffect, useState } from 'react'
import TelegramBotDash from '../components/telegramPagesComponent/maindash';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import TelegramBoosters from '../components/telegramPagesComponent/boosters';
import TelegramFrens from '../components/telegramPagesComponent/frens';
import TelegramLeague from '../components/telegramPagesComponent/leaugue';
import TelegramPumpEarn from '../components/telegramPagesComponent/earn';
import { ArrowBack } from '@mui/icons-material';
import { checkDownloadReward, checkMiningBalanceDash, checkTurboBoostOn, getUserDetails } from '@/lib/utils/request';
const Cookies = require("js-cookie");

export default function TelegramBotMain() {
    let encrypt = Cookies.get('encrypt_id');

    const [selectedPage, setSelectedPage] = useState('dashboard');
    const [pagesArray, setPagesArray] = useState<any>([]);
    const [userBalance, setUserBalance] = useState(0);
    const [update, setUpdate] = useState(0);
    const [claimTime, setClaimTime] = useState("2024-06-12T19:24:02.000Z")
    const [countDownActive, setIsCountDownActive] = useState(false)
    const [boostActive, setBoostActive] = useState(false);
    const [opened, setOpened] = React.useState(false);
    const [fullBalance, setFullBalance] = useState(true);
    const [calAmount, setCalAmount] = useState(0);
    const [gradeAmount, setGradeAmount] = useState(0)
    const [showExplosion, setShowExplosion] = useState(false)
    const [conditionMet, setConditionMet] = useState(false);


    useEffect(() => {
        const loadItems = async () => {
            let checkedDownloaded = await checkDownloadReward(encrypt);
            if (checkedDownloaded.status === 'server_error') {
                // Handle server error
                console.log('Server error occurred');
            } else if (checkedDownloaded.status === 'connection_error') {
                // Handle connection error
                console.log('Connection error occurred');
            } else if (checkedDownloaded.status === 'unknown_error') {
                // Handle unknown error
                console.log('Unknown error occurred');
            } else if (checkedDownloaded.status === true && !checkedDownloaded.data.status) {
                setOpened(true);
            }

            let checkBoost = await checkTurboBoostOn(encrypt);
            if (checkBoost.data.turboBoostOn) {
                setShowExplosion(true)
                setBoostActive(checkBoost.data.turboBoostOn);
            } else {
                setBoostActive(false);
                setShowExplosion(false)
            }

            let checkMBalance = await checkMiningBalanceDash(encrypt);
            let data = checkMBalance.data;
            setClaimTime(data.nextClaimTime);
            setFullBalance(data.fullBalanceBox);
            setIsCountDownActive(data.isCountDownActive);
            setCalAmount(data.balance || 0);
            setGradeAmount(data.fullBalanceAmount || 0);
            // let checkRefillBoost = await checkRefill(encrypt);
        }

        loadItems();
        const intervalId = setInterval(loadItems, 4000);

        return () => clearInterval(intervalId);
    }, [encrypt, update]);



    useEffect(() => {
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
            }
        })();
        setSelectedPage(pagesArray[pagesArray.length - 1] || 'dashboard');
    }, [])

    useEffect(() => {
        if (selectedPage == pagesArray[pagesArray.length - 1]) return;
        setPagesArray((prevPages: any) => [...prevPages, selectedPage]);

    }, [selectedPage]);

    const goBack = () => {
        let newpages = (prevPages: any) => {
            const newPagesArray = [...prevPages];
            newPagesArray.pop(); // Remove the current page
            return newPagesArray;
        };
        let items = newpages(pagesArray);
        console.log(pagesArray);

        setPagesArray(items);
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
                    userBalance={userBalance}
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
                                    userBalance={userBalance}
                                    setUserBalance={setUserBalance}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    update={update}
                                    setUpdate={setUpdate}
                                    fullBalance={fullBalance}
                                    calAmount={calAmount}
                                    gradeAmount={gradeAmount}
                                    setCalAmount={setCalAmount}
                                    setGradeAmount={setGradeAmount}
                                    claimTime={claimTime}
                                    countDownActive={countDownActive}
                                    opened={opened}
                                    setOpened={setOpened}
                                    boostActive={boostActive}
                                    showExplosion={showExplosion}
                                    setClaimTime={setClaimTime}

                                />
                                :
                                <TelegramBotDash
                                    userBalance={userBalance}
                                    setUserBalance={setUserBalance}
                                    update={update}
                                    setUpdate={setUpdate}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    fullBalance={fullBalance}
                                    calAmount={calAmount}
                                    gradeAmount={gradeAmount}
                                    setCalAmount={setCalAmount}
                                    setGradeAmount={setGradeAmount}
                                    claimTime={claimTime}
                                    countDownActive={countDownActive}
                                    opened={opened}
                                    setOpened={setOpened}
                                    boostActive={boostActive}
                                    showExplosion={showExplosion}
                                    setClaimTime={setClaimTime}
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
