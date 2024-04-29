import React from 'react';

interface CustomInputProps {
    type: string;
    sx?: {};
    value?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;
    label?: string;
    error?: boolean;
    required?: boolean;
    autocomplete?: 'off' | 'on';
}

const CustomInput: React.FC<CustomInputProps> = ({ type, autocomplete, required, className, value, error, onChange, label, addOnStart, addOnEnd, sx, placeholder, disabled }) => {
    let color = disabled ? 'border-[#757A6F] blur-[2px]' : error == true ? 'border-[#ff0000]' : error == false ? 'border-[#A5E314] ' : 'border-[#52594B]';
    return (
        <div style={sx} className={className}>
            {label && <label className='text-[#898989] font-normal '>
                {label}
            </label>}
            <div className={`flex flex-row items-center justify-between border mt-3 ${color} text-[#EDF9D0] p-2 rounded-[20px] w-full`}>
                {addOnStart && addOnStart}

                <input
                    className="p-2 w-full focus:outline-none text-[14px] bg-transparent "
                    type={type}
                    // value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    autoComplete={autocomplete}

                />
                {addOnEnd && addOnEnd}


            </div>
        </div>

    );
}



export default CustomInput;
