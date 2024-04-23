import React from 'react';

interface CustomButtonProps {
    type: string;
    sx?: {};
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    className?: string;
    addOnStart?: React.ReactNode;
    addOnEnd?: React.ReactNode;

    error?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    type,
    className,
    onChange,
    addOnStart,
    addOnEnd,
    sx,
    disabled
}) => {
    return (
        <div style={sx}>
        </div>

    );
}



export default CustomButton;
