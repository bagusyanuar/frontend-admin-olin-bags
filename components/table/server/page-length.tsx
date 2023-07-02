import React from 'react'
import { PageLengthProps } from '.'

function PageLength({
    pageLength,
    onChange
}: PageLengthProps) {
  return (
    <div className='flex items-center mb-3'>
        <span className='text-sm text-slate-600 me-2'>Show :</span>
            <select onChange={(e) => { onChange(e) }} id='page_length' className='px-3 py-1 rounded-md border bg-inherit text-sm text-slate-600'>
                {
                    pageLength.map((v, i) => {
                        return (
                            <option key={i} className='bg-white text-slate-600 hover:bg-slate-200' value={v}>{v}</option>
                        )
                    })
                }
            </select>
            <span className='text-sm text-slate-600 ms-2'>entries</span>
    </div>
  )
}

export default PageLength