import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = "button",
    isDisabled = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={`bg-[#FF0000] text-[16px] text-white font-normal py-3 px-5 rounded-[5px] hover:bg-red-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
