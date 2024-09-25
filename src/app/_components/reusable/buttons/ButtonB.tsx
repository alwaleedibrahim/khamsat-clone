import React from 'react'

interface IButtonBProps{
    href?: string; 
    text: string; 
    onClick?: () => void; 
    extraStyle?: string; 
}
const ButtonB: React.FC<IButtonBProps> = ({
    href = '/',
    text,
    onClick,
    extraStyle = '',
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`text-[16px] font-kufi border border-primary text-primary px-[22px] py-[13px] hover:bg-primary hover:text-white transition-all ${extraStyle}`}
        >
            {text}
        </a>
    )
}

export default ButtonB