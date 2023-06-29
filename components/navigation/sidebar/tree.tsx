import React, { useState } from 'react'
import { SidebarTreeProps } from '.'

function Tree({
    active,
    title = 'Menu Tree',
    children,
    icon = 'circle'
}: SidebarTreeProps) {
    const [open, setOpen] = useState<boolean>(false)

    const handleChange = (): void => {
        setOpen(!open)
        console.log(open);
        
    }
    return (
        <>
            <div onClick={handleChange} className={`flex items-center justify-between ${active ? '' : 'hover:bg-blue-700'} cursor-pointer h-[45px] rounded-md pl-3 sm:pl-0 md:pl-0 lg:pl-3 lg:pr-3 sm:justify-center md:justify-center lg:justify-start transition-all ease-in-out duration-500`}>
                <div className='flex items-center w-full'>
                    <span className={`material-symbols-outlined ${active ? 'text-blue-600' : 'text-gray-100'}`}>{icon}</span>
                    <span className={`${active ? 'text-blue-600' : 'text-gray-100'} text-sm w-full ml-2 tracking-wider sm:hidden md:hidden lg:block transition-all ease-in-out duration-500`}>{title}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="h-6 w-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className={`${open ? 'max-h-40' : 'max-h-0'} transition-all duration-500 ease overflow-hidden`}>
                {children}
            </div>
        </>
    )
}

export default Tree