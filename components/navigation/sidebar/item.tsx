import React from 'react'
import Link from 'next/link'
import { SidebarItemProps } from '.'

function Item({
    link = '',
    active,
    title = 'Menu',
    icon = 'circle'
}: SidebarItemProps) {
    return (
        <Link href={link} className={`flex items-center ${active ? 'bg-blue-900' : 'hover:bg-blue-700'} cursor-pointer h-[45px] rounded-md mb-1 pl-3 sm:pl-0 md:pl-0 lg:pl-3 sm:justify-center md:justify-center lg:justify-start transition-all ease-in-out duration-500`}>
            <span className={`material-symbols-outlined ${active ? 'text-white' : 'text-gray-100'}`}>{icon}</span>
            <span className={`${active ? 'text-white' : 'text-gray-100'} text-sm w-full ml-2 tracking-wider sm:hidden md:hidden lg:block transition-all ease-in-out duration-500`}>{title}</span>
        </Link>
    )
}

export default Item