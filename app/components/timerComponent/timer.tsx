import Image from 'next/image';
import React, { useState } from 'react'

export default function TimerCount() {

    const [time, setTimeVar] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    //Function to update countdown timer
    function updateCountdownTimer(targetDate: any) {
        //Get the current time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = targetDate - now;

        // Calculate hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeVar({
            days: days,
            hours: hours,
            seconds: seconds,
            minutes: minutes,
        })
    }
    // Function to start countdown
    function startCountdown() {
        // Get the launch date string (example format: "March 17, 2024 12:00:00")
        var launchDateString = "May 17, 2024 12:00:00";
        var targetDate = new Date(launchDateString).getTime();

        // Update the countdown timer every second
        var countdownInterval = setInterval(function () {
            updateCountdownTimer(targetDate);
        }, 1000);
    }
    // Start the countdown when the page loads
    startCountdown();
    return (
        <div id="timerDiv" className='flex relative flex-row border border-[#A5E314] bg-[#10130DBF] h-[89px] py-4 rounded-3xl  mb-5  items-center justify-center timerDiv'>
            <div className='absolute flex justify-between items-center w-full top-[-35px]'>
                <Image
                    className="max-h-[120px]"
                    src={'/images/deposit/military.png'}
                    width={130}
                    height={120}
                    priority
                    alt="" />

                <Image
                    className="right-[25px]"
                    src={'/images/coins.png'}
                    width={129}
                    height={129}
                    priority
                    alt="" />
            </div>
            <div className='border-e border-white px-5 leading-7'>
                <p className='text-[40px] font-digital'>{time.days}</p>
                <span className='font-sans text-[#52594B] text-[12px] text-center'>Days</span>
            </div >
            <div className='border-e border-white px-5 leading-7'>
                <p className='text-[40px] font-digital'>{time.hours}</p>
                <span className='font-sans text-[#52594B] text-[12px] text-center'>Hours</span>
            </div>
            <div className='border-e border-white px-5 leading-7'>
                <p className='text-[40px] font-digital'>{time.minutes}</p>
                <span className='font-sans text-[#52594B] text-[12px] text-center'>Minutes</span>
            </div>
            <div className='border-e border-white px-5 leading-7'>
                <p className='text-[40px] font-digital'>{time.seconds}</p>
                <span className='font-sans text-[#52594B] text-[12px] text-center'>Seconds</span>
            </div>
        </div>
    )
}
