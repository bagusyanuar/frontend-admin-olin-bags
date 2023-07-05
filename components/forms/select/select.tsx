import React from 'react'
import { SelectProps } from '.'

function Select({
    data,
    onChange = () => { }
}: SelectProps) {

    const handlechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let v = e.currentTarget.value
        onChange(e, v)
    }
    return (
        <select onChange={handlechange} id='page_length' className='px-3 py-2 w-full rounded-md border border-slate-400 bg-inherit text-sm text-slate-600'>
            {
                data.map((v, i) => {
                    return (
                        <option key={i} className='bg-white text-slate-600 hover:bg-slate-200' value={v.value}>{v.text}</option>
                    )
                })
            }
        </select>
    )
}

export default Select