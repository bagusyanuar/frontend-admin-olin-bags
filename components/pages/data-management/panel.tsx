import React from 'react'

function Panel({
    icon,
    title = 'Menu'
}: { icon: string, title: string }) {
    return (
        <div className='h-40 w-1/2 lg:w-1/6 md:w-1/4 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-slate-500 hover:cursor-pointer hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300'>
            <div className='material-symbols-outlined text-inherit mb-1 text-5xl'>{icon}</div>
            <div className='text-inherit'>{title}</div>
        </div>
    )
}

export default Panel