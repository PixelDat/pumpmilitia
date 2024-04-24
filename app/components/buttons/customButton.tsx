import React from 'react';

interface CustomButtonProps {
    type: 'normal' | 'transparent' | "gradient";
    text: string;
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
    text,
    className,
    onChange,
    addOnStart,
    addOnEnd,
    sx,
    disabled
}) => {
    return (
        <>


            {type == "gradient" ?
                <button className="bg-vivd-lime-green component_btn px-6 py-2 shadow-sm rounded-lg shadow-white">
                    {text}
                </button>
                : type == "transparent" ?
                    <button className="px-6 py-2 border component_btn_transparent border-vivd-lime-green rounded-lg text-vivd-lime-green-10">
                        {text}
                    </button>
                    :
                    <button className="px-6 py-2 border normal_btn border-vivd-lime-green rounded-lg ">
                        {text}
                    </button>
            }
        </>


    );
}



export default CustomButton;
