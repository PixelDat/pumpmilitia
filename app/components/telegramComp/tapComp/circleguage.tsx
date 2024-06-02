import Image from 'next/image';
import React from 'react';

interface CircleGaugeProps {
  percent: number;
  onClick: React.MouseEventHandler;

}
const CircleGauge: React.FC<CircleGaugeProps> = ({ percent, onClick }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center justify-center" onClick={onClick}>
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
          strokeDashoffset={strokeDashoffset}
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
