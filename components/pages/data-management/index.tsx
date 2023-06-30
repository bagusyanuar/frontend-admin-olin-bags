import React from 'react'
import Panel from './panel'

function Index() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='w-full flex items-center justify-center gap-3 mb-3'>
        <Panel icon='person' title='User Account' />
        <Panel icon='map' title='Provinces' />
        <Panel icon='location_city' title='Cities' />
      </div>
      <div className='w-full flex items-center justify-center gap-3 mb-3'>
        <Panel icon='home_work' title='Production House' />
        <Panel icon='diversity_3' title='Sewing Agent' />
        <Panel icon='print' title='Printing Agent' />
      </div>
    </div>
  )
}

export default Index