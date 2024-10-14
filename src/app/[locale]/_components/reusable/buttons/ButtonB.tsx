import React from 'react'

interface IButtonBProps{
    href?: string; 
    text: string; 
    icon? : React.ReactNode
    onClick?: () => void; 
    extraStyle?: string; 
}
const ButtonB: React.FC<IButtonBProps> = ({
    href = '/',
    text,
    icon,
    onClick,
    extraStyle,
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`flex items-center font-kufi border border-primary text-primary hover:bg-primary hover:text-white transition-all ${extraStyle}`}
        >
            {icon && <span className='mx-2'>{icon}</span>}
            {text}
        </a>
    )
}

export default ButtonB