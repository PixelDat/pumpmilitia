import React from 'react'
import { render } from 'react-dom';

interface ToastComponentProps {
    content: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;
    type: string;
}


const ToastComponent: React.FC<ToastComponentProps> = ({ addOnEnd, addOnStart, type, content }) => {
    render(
        <div className='w-full' style={{
            position: 'absolute',
            top: '20px'
        }}>
            <div className='border-2 rounded-xl flex flex-row justify-center gap-4 text-[#EDF9D0] items-center text-center p-3 w-3/12 m-auto border-[#C3EC62]'>
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