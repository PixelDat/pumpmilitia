import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CircleGaugeProps {
  percent: number;
  updatePercent: Function;

}
const CircleGauge: React.FC<CircleGaugeProps> = ({ percent, updatePercent }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [stroke, setStroke] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setStroke((prev) => (circumference / 15) * (timeLeft - 1));
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false);
      setTimeLeft(15);
      setStroke(circumference);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
    updatePercent();
  };

  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
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
          strokeWidth="10"
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
        <div className='leading-tight text-center'>
          15s
          <Image src='/telegram/dashpage/palm.png' alt='' width={32} height={32} priority />
        </div>

      </div>
    </div>
  );
};

export default CircleGauge;
