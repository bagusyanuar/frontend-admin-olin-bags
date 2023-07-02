import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Sidebar, { SidebarItem, SidebarTree } from '../navigation/sidebar'
import Navbar from '../navigation/navbar'
import Content from './content'

const pathOfDataManagement: Array<string> = ['/data-management', '/user']
function Index({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const path = router.pathname
  return (
    <div>
      <Sidebar>
        <div className='flex items-center mt-3 mb-10 sm:flex sm:justify-center'>
          <Image src="/assets/brand-logo-white.png" width={150} height={10} alt="logo" />
          {/* <p className='font-bold ms-2 sm:hidden md:hidden lg:block block'>Company Name</p> */}
        </div>
        <SidebarItem link='#' title='Dashboard' active={path.startsWith('/dashboard')} icon='dashboard' />
        <SidebarItem link='/data-management' title='Data Management' active={pathOfDataManagement.includes(path)} icon='hard_drive' />
        <SidebarItem link='#' title='Purchasing' active={false} icon='receipt_long' />
        <SidebarItem link='#' title='Production Process' active={false} icon='account_tree' />
      </Sidebar>
      <Content>
        <Navbar></Navbar>
        <div className='px-3 py-1 flex-grow'>
          {children}
        </div>
      </Content>
    </div>
  )
}

export default Index