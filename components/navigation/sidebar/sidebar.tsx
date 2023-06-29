import React from 'react'
import { SidebarProps } from '.'

function Sidebar({
    children
}: SidebarProps) {
    return (
        <div className='fixed h-screen w-16 lg:w-[290px] xl:w-[290px] py-1 px-1 transition-all ease-in-out duration-500'>
            <div className='flex flex-col left-0 h-full px-5 md:px-1 lg:px-4 sm:px-1 py-5 bg-blue-600 rounded-md'>
                {children}
            </div>
        </div>
    )
}

export default Sidebar