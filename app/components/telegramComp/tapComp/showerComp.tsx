import React, { useEffect, useState } from 'react';
interface ShowerCompProps {
    id: any;
    points: number;
}
const PointsShower: React.FC<ShowerCompProps> = ({ id, points }) => {
    return (
        <div
            key={id}
            id={id}
            className='absolute z-50 font-gameria text-[#A5E314] font-bold text-[30px]'
            style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'rise 2s forwards'
            }}
        >
            {points}+
            <style jsx>{`
                @keyframes rise {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(-380px) translateX(40px);
                    }
                }
            `}</style>
        </div>
    );
};

export default PointsShower;