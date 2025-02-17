import { useState, useRef, useEffect, LegacyRef } from "react";
import { RefObject } from "react";

interface OtpInputProps {
    setOtp: (otp: string) => void;
    error?: boolean;
    success?: boolean;
}

const OtpComp: React.FC<OtpInputProps> = ({ error, success, setOtp }) => {
    const [filled, setFilled] = useState(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);



    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    function handleInput(e: any, index: number) {
        let inputVal = e.target.value;

        if (inputVal.length !== 0) {
            if (e.target.nextSibling != null) {
                e.target.nextSibling.focus();
            }
        } else {
            if (e.target.previousSibling != null) {
                e.target.previousSibling.focus();
            }
        }

        let newFilled = [...filled];
        newFilled[index] = inputVal;
        setFilled(newFilled);
    }

    useEffect(() => {
        if (filled[5] !== '') {
            setOtp(filled.join(''));
        }
    }, [filled])
    function handlePaste(e: any) {
        let pastedData = e.clipboardData.getData('Text');

        // Check if the pasted data is a number and has length of 6
        if (!isNaN(pastedData) && pastedData.length === 6) {
            let newFilled = pastedData.split('').slice(0, 6);
            setFilled(newFilled);

            newFilled.forEach((val: any, index: number) => {
                (inputRefs.current[index] as HTMLInputElement).value = val;
            });
        }
    }

    return (
        <>
            <div className="OtpComponent gap-2 justify-center flex ">
                {filled.map((val: any, index: number) => (
                    <input
                        key={index}
                        ref={(el: any) => (inputRefs.current[index] = el)}
                        value={val}
                        onChange={(e) => handleInput(e, index)}
                        onPaste={handlePaste}
                        className={`${error ? 'border border-[#EC5572]' : success ? 'border border-[#79E555]' : 'border border-[#898989]'}`}
                        type="text"
                        maxLength={1}
                    />
                ))}

            </div>
        </>
    );
}

export default OtpComp;
