import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CircleGauge from './circleguage';

interface Taptypes {
    opened: boolean;
    gradeAmount: number;
    setGradeAmount: Function;
    percent: number;
    setPercent: Function;
    tapping: boolean;
    setTapping: Function;
    showers: number[];
    setShowers: Function;
    updatePercentage: Function;
    calAmount: number;
    setCalAmount: Function;
    isRunning: boolean;
    setIsRunning: Function;
    points: number;
    fullBalance: boolean;
}


const Tapcomponent: React.FC<Taptypes> = ({
    points,
    fullBalance,
    gradeAmount, setGradeAmount, percent, setPercent, tapping, setTapping,
    showers, setShowers, updatePercentage, calAmount, setCalAmount,
    opened, isRunning, setIsRunning }) => {
    // this returns to default value tapping
    // useEffect(() => {
    //     let timeout: NodeJS.Timeout;
    //     if (!tapping && percent < 100) {
    //         timeout = setTimeout(() => {
    //             setPercent(100);
    //             setCalAmount(gradeAmount)
    //         }, 1000);
    //     }
    //     return () => clearTimeout(timeout);
    // }, [tapping, percent]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (percent < 100) {
                setPercent((prev: number) => Math.min(prev + 10, 100));
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [percent]);



    useEffect(() => {
        const interval = setInterval(() => {
            setTapping(false);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     console.log(showers);

    //     const timeout = setTimeout(() => {
    //         setShowers((prev: number[]) => prev.slice(1));
    //     }, 500);

    //     return () => clearTimeout(timeout);
    // }, [showers]);


    return (
        <div className='text-[#A5E314] py-4' >
            <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    {!opened &&
                        <div style={{ zIndex: 1 }} className='bg-[#10130D] flex flex-row items-center justify-center items-center m-auto gap-2 border-[#A5E314] border-2 p-2 rounded-3xl'>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                            <div className='flex flex-col w-[80px] leading-tight'>
                                <span className='text-[14px]'>{Number(calAmount).toFixed(2)}</span>
                                <span className='text-[14px] text-[#52710A]'>/{gradeAmount.toLocaleString()}</span>
                            </div>
                        </div>
                    }
                    <div className='bg-[#374C07] -left-[10px] relative -z-0 w-[150px] p-[2px] rounded-r-full'>
                        <div style={{ width: `${(calAmount / gradeAmount) * 100}%` }} className='h-[16px] bg-gradient-to-b from-[#A5E314] rounded-r-full'>
                        </div>
                    </div>
                </div>
                <div>
                    <CircleGauge fullBalance={fullBalance} isRunning={isRunning} setIsRunning={setIsRunning} updatePercent={updatePercentage} percent={percent} />
                </div>
            </div>
        </div>
    );
};

export default Tapcomponent;
