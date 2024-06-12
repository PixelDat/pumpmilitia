import Image from 'next/image';
import React, { useEffect, useState } from 'react'


interface TimerComp {
    claimTime: string;
    setUpdate: Function;
}
const TimerTapCount: React.FC<TimerComp> = ({ claimTime, setUpdate }) => {

    const [time, setTimeVar] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Function to update countdown timer
    function updateCountdownTimer(targetDate: any) {
        // Get the current time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = targetDate - now;

        if (distance <= 0) {
            setTimeVar({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            setUpdate(Math.random())
            return;
        }

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeVar({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }

    // Function to start countdown
    function startCountdown() {
        // Use the ISO 8601 format for the date string
        var claimTimeString = claimTime;
        var targetDate = new Date(claimTimeString).getTime();

        // Update the countdown timer every second
        var countdownInterval = setInterval(function () {
            updateCountdownTimer(targetDate);
        }, 1000);
    }

    // Start the countdown when the component mounts
    useEffect(() => {
        startCountdown();
    }, []);
    return (
        <div id="timerDiv" className='flex relative w-10/12 flex-row  border border-[#A5E314] bg-[#10130DBF] h-[65px] md:h-[89px] py-4 rounded-3xl   items-center justify-center timerDiv'>
            <div className='flex items-center'>
                <div className='absolute -left-0 md:left-[-10px] bottom-0'>
                    <Image
                        src={'/images/deposit/military.png'}
                        width={113}
                        height={113}
                        priority
                        alt="" />
                </div>
                <div className='absolute bottom-2 -right-5 md:-top-5'>
                    <Image
                        src={'/images/coins.png'}
                        width={80}
                        height={80}
                        alt="" />
                </div>

            </div>
            <div className='border-e border-white px-2 md:px-5 leading-4 md:leading-7'>
                <p className='text-[20px] md:text-[40px] font-digital'>{time.days}</p>
                <span className='font-sans text-[#52594B] text-[10px] md:text-[12px] text-center'>Days</span>
            </div >
            <div className='border-e border-white px-2 md:px-5 leading-4 md:leading-7'>
                <p className='text-[20px] md:text-[40px] font-digital'>{time.hours}</p>
                <span className='font-sans text-[#52594B] text-[10px] md:text-[12px] text-center'>Hours</span>
            </div>
            <div className='border-e border-white px-2 md:px-5 leading-4 md:leading-7'>
                <p className='text-[20px] md:text-[40px] font-digital'>{time.minutes}</p>
                <span className='font-sans text-[#52594B] text-[10px] md:text-[12px] text-center'>Minutes</span>
            </div>
            <div className='border-e border-white px-2 md:px-5 leading-4 md:leading-7'>
                <p className='text-[20px] md:text-[40px] font-digital'>{time.seconds}</p>
                <span className='font-sans text-[#52594B] text-[10px] md:text-[12px] text-center'>Seconds</span>
            </div>
        </div>
    )
}


export default TimerTapCount;