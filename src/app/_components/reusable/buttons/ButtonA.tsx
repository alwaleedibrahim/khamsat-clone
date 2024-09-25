import React from 'react';

interface IButtonProps {
    type?: 'button' | 'submit' | 'reset'; 
    text: string; 
    onClick?: () => void; 
    extraStyle?: string; 
}

const ButtonA: React.FC<IButtonProps> = ({
    type = 'submit', 
    text,
    onClick,
    extraStyle = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-primary font-kufi text-white px-[24px] py-[12px] hover:bg-[#3a7d25] transition-all ${extraStyle}`}
        >
            {text}
        </button>
    );
};

export default ButtonA;
