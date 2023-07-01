import React from 'react'
import Panel from './panel'

function Index() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='w-full flex items-center justify-center gap-3 mb-3'>
        <Panel icon='person' title='User Account' link='/user' />
        <Panel icon='diversity_3' title='Agents' link='#' />
        <Panel icon='location_city' title='Areas' link='#' />
      </div>
      <div className='w-full flex items-center justify-center gap-3 mb-3'>
        <Panel icon='home_work' title='Production House' link='#' />
        <Panel icon='factory' title='Sewing Agent' link='#' />
        <Panel icon='print' title='Printing Agent' link='#' />
      </div>
    </div>
  )
}

export default Index