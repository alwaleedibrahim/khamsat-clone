import React from 'react'

const ServicesCollection = ({children} : Readonly<{children: React.ReactNode}>) => {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 w-full">
               {children}
            </div>
    )
}

export default ServicesCollection