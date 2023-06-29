import React from 'react'
import Image from 'next/image'
import Sidebar, { SidebarItem, SidebarTree } from '../navigation/sidebar'
import Navbar from '../navigation/navbar'
import Content from './content'


function Index({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar>
        <div className='md:flex md:items-center md:mt-3 md:mb-10 sm:mb-10 sm:flex sm:justify-center'>
          <Image src="/assets/brand-logo-white.png" width={150} height={10} alt="logo" />
          {/* <p className='font-bold ms-2 sm:hidden md:hidden lg:block block'>Company Name</p> */}
        </div>
        <SidebarItem link='#' title='Dashboard' active={true} icon='dashboard' />
        {/* <SidebarTree active={false} title='Master' icon='database'>
          <SidebarItem link='#' title='Dashboard' active={false} icon='dashboard' />
        </SidebarTree> */}
        <SidebarItem link='/data-management' title='Data Management' active={false} icon='hard_drive' />
        <SidebarItem link='#' title='Purchasing' active={false} icon='receipt_long' />
        <SidebarItem link='#' title='Production Process' active={false} icon='account_tree' />
      </Sidebar>
      <Content>
        <Navbar></Navbar>
        <div className='px-5 md:px-3 lg:px-3 sm:px-3 py-3 md:py-3 lg:py-3 sm:py-2'>
          {children}
        </div>
      </Content>
    </div>
  )
}

export default Index