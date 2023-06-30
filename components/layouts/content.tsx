import React from 'react'

function Content({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-screen flex flex-col bg-slate-100 pl-16 lg:pl-[290px] xl:pl-[290px] py-1 transition-all ease-in-out duration-500'>
        {children}
    </div>
  )
}

export default Content