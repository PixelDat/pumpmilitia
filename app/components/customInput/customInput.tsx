import React from 'react';

interface CustomInputProps {
    type: string;
    sx?: {};
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;
    label?: string;
    error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, className, value, error, onChange, label, addOnStart, addOnEnd, sx, placeholder, disabled }) => {
    let color = disabled ? 'border-[#757A6F] blur-[2px]' : error == true ? 'border-[#ff0000]' : error == false ? 'border-[#A5E314] ' : 'border-[#52594B]';
    return (
        <div style={sx}>
            {label && <label className='text-[#898989] font-normal '>
                {label}
            </label>}
            <div className={`flex flex-row items-center justify-between border mt-3 ${color} text-[#EDF9D0] p-2 rounded-[20px] w-full`}>
                {addOnStart && addOnStart}

                <input
                    className="p-2 w-full focus:outline-none text-[14px] bg-transparent "
                    type={type}
                    value={value}
                    autoComplete=""
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}

                />
                {addOnEnd && addOnEnd}


            </div>
        </div>

    );
}



export default CustomInput;
