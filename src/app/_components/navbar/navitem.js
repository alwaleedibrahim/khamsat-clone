import React from 'react'

export default function NavItem({children}) {
  return (
    <div className='px-5 hover:bg-[#888] h-full text-center flex items-center'>
        {children}
    </div>
  )
}
