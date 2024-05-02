import React from 'react'
import { render } from 'react-dom';

interface ToastComponentProps {
    content: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;
    type: string;
}


export const ToastComponent: React.FC<ToastComponentProps> = ({ addOnEnd, addOnStart, type, content }) => {
    let color = type == 'error' ? 'border-[#FF0000]' : type == 'success' ? 'border-[#A5E314]' : 'border-[#C3EC62]';
    return (
        <div className='w-full' style={{
            position: 'fixed',
            top: '120px',
            zIndex: 100,
        }}>
            <div className={`border-2  bg-[#20251A] rounded-xl flex flex-row justify-center gap-4 text-[#EDF9D0] items-center text-center p-3 py-4 w-9/12 md:w-4/12  m-auto ${color}`}>
                {addOnStart &&
                    addOnStart
                }
                <p className='text-[16px] text-[#EDF9D0]'>
                    {content}
                </p>
                {addOnEnd &&
                    addOnEnd
                }
            </div>
        </div>
    )
}

export const toast = (type: string, content: string) => {
    return <ToastComponent type={type} content={content} />
}