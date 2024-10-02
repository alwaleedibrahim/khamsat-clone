"use client"
import React from 'react'

interface IButtonBProps{
    href?: string; 
    text: string; 
    onClick?: () => void; 
    extraStyle?: string; 
}

const TagButton: React.FC<IButtonBProps> = ({
    href = '/',
    text,
    onClick,
    extraStyle = '',
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`bg-white font-kufi mb-[10px] border border-bColor text-style2 px-[8px] py-[4px] transition-all leading-[1.8] ${extraStyle}`}
        >
            {text}
        </a>
    )
}

export default TagButton