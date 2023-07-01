import React from 'react'
import { HeaderProps } from '.'

function Header({
    headers,
    withIndex = false,
}: HeaderProps) {
    return (
        <thead className="text-sm text-slate-600 bg-gray-50">
            <tr>
                {
                    withIndex ? (<td className={`px-6 py-3 w-1 text-center font-semibold`}>
                        <div className='flex items-center'>
                            #
                        </div>
                    </td>) : ''
                }
                {
                    headers.map((header, index) => {
                        return (
                            <td key={index} className={`px-6 py-3 font-semibold ${header.className ?? ''}`}>
                                <div className={`flex items-center ${header.childClassName ?? ''}`}>
                                    <span>{header.value}</span>
                                </div>
                            </td>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default Header