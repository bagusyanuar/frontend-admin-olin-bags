import React from 'react'
import Sidebar from './sidebar'
import Item from './item'

export interface SidebarProps {children: React.ReactNode}
export interface SidebarItemProps {link: string, active: boolean, title: string, icon?: string}

export const SidebarItem = Item
export default Sidebar