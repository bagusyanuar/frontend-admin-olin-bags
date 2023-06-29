import React from 'react'
import Sidebar from './sidebar'
import Item from './item'
import Tree from './tree'

export interface SidebarProps {children: React.ReactNode}
export interface SidebarItemProps {link: string, active: boolean, title: string, icon?: string}
export interface SidebarTreeProps {active: boolean, title: string, children: React.ReactNode, icon?: string}
export const SidebarItem = Item
export const SidebarTree = Tree
export default Sidebar