import { AccessAlarm, PunchClock, Watch } from '@mui/icons-material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CircleGaugeProps {
  percent: number;
  updatePercent: Function;
  isRunning: boolean;
  setIsRunning: Function;
  fullBalance: boolean;

}
const CircleGauge: React.FC<CircleGaugeProps> = ({ percent, updatePercent, isRunning, setIsRunning, fullBalance }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [stroke, setStroke] = useState(circumference);
  const [timeLeft, setTimeLeft] = useState(15);

  // useEffect(() => {
  //   let timer: NodeJS.Timeout;
  //   if (isRunning && timeLeft > 0) {
  //     timer = setInterval(() => {
  //       setTimeLeft((prev) => prev - 1);
  //       setStroke((prev) => (circumference / 15) * (timeLeft - 1));
  //     }, 1000);
  //   } else if (timeLeft <= 0) {
  //     setIsRunning(false);
  //     setTimeLeft(15);
  //     setStroke(circumference);
  //   }
  //   return () => clearInterval(timer);
  // }, [isRunning, timeLeft]);

  // const handleClick = () => {
  //   if (!fullBalance) {
  //     updatePercent();
  //     return;
  //   } else {
  //     if (!isRunning) {
  //       setIsRunning(true);
  //     }
  //     updatePercent();
  //   }


  // };

  return (
    <a href='pump://pumpmilitia.app' target='_blank' className="flex items-center justify-center">
      <svg
        className="relative"
        width="66"
        height="66"
        viewBox="0 0 120 120"
      >
        <circle
          className="text-[#20251A]"
          strokeWidth="10"
          stroke="currentColor"
          fill="#20251A"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-[#A5E314]"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - stroke}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute text-[14px] font-semibold text-[#A5E314] flex flex-row items-center justify-center">
        <div className='leading-tight flex flex-col justify-center text-center'>
          <Image src='/telegram/boost/play.png' alt='' width={40} height={40} priority />
        </div>
      </div>
    </a>
  );
};

export default CircleGauge;
