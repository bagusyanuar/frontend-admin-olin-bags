import React from 'react'
import Image from 'next/image'
import Sidebar, {SidebarItem} from '../navigation/sidebar'

function Index({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar>
        <div className='md:flex md:items-center md:mt-3 md:mb-10 sm:mb-10 sm:flex sm:justify-center'>
          <Image src="/assets/brand-logo-white.png" width={150} height={10} alt="logo" />
          {/* <p className='font-bold ms-2 sm:hidden md:hidden lg:block block'>Company Name</p> */}
        </div>
        <SidebarItem link='#' title='Dashboard' active={true} icon='dashboard' />
      </Sidebar>
    </div>
  )
}

export default Index