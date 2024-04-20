import React from 'react';

interface CustomInputProps {
    type: string;
    sx?: string;
    className?: string;
    placeholder?: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, className, addOnStart, addOnEnd, sx, placeholder }) => {
    return (
        <div className='border border-[#A5E314] p-2 rounded-2xl w-full'>
            {addOnStart && addOnStart}
            <input
                className="p-2 text-vivd-lime-green-10 text-[14px] bg-transparent "
                type={type}
                placeholder={placeholder}
                style={{ ...parseSx(sx) }}
            />
            {addOnEnd && addOnEnd}

        </div>
    );
}

const parseSx = (sx?: string) => {
    if (!sx) return {};

    // Convert sx string to style object
    const styles = sx.split(';').reduce((acc, style) => {
        const [key, value] = style.split(':');
        if (key && value) {
            acc[key.trim()] = value.trim();
        }
        return acc;
    }, {} as { [key: string]: string });

    return styles;
}

export default CustomInput;
