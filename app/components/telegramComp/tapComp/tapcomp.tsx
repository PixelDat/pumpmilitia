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
}


const Tapcomponent: React.FC<Taptypes> = ({
    gradeAmount, setGradeAmount, percent, setPercent, tapping, setTapping,
    showers, setShowers, updatePercentage, calAmount, setCalAmount,
    opened }) => {


    // upgrade tapping
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (!tapping && percent < 100) {
            timeout = setTimeout(() => {
                setPercent(100);
                setCalAmount(gradeAmount)
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [tapping, percent]);

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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowers((prev: number[]) => prev.slice(1));
        }, 2000);

        return () => clearTimeout(timeout);
    }, [showers]);

    return (
        <div className='text-[#A5E314] py-4' >
            <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    {!opened &&
                        <div style={{ zIndex: 1 }} className='bg-[#10130D] flex flex-row items-center justify-center items-center m-auto gap-2 border-[#A5E314] border-2 p-2 rounded-3xl'>
                            <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={32} height={32} priority />
                            <div className='flex flex-col w-[80px] leading-tight'>
                                <span className='text-[14px]'>{calAmount.toLocaleString()}</span>
                                <span className='text-[14px] text-[#52710A]'>/1,000</span>
                            </div>
                        </div>
                    }
                    <div className='bg-[#374C07] -left-[10px] relative -z-0 w-[150px] p-[2px] rounded-r-full'>
                        <div style={{ width: `${percent}%` }} className='h-[16px] bg-gradient-to-b from-[#A5E314] rounded-r-full'>
                        </div>
                    </div>
                </div>
                <div>
                    <CircleGauge onClick={() => updatePercentage()} percent={percent} />
                </div>
            </div>

            {showers.map((shower) => (
                <div
                    key={shower}
                    className='absolute font-gameria text-[#A5E314] font-bold text-[40px]'
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'rise 2s forwards'
                    }}
                >
                    50+
                </div>
            ))}

            <style jsx>{`
                @keyframes rise {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(-200px) translateX(40px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Tapcomponent;
