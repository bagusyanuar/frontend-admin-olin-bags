import React from 'react'
import { BodyProps } from '.'

function Body({
    data,
    headers,
    withIndex = false
}: BodyProps) {
    if (data.length === 0) {
        let coloumnCount = withIndex ? (headers.length + 1) : headers.length;
        return (
            <tbody>
                <tr>
                    <td colSpan={coloumnCount} className='text-center py-4 text-gray-500 whitespace-nowrap'>No Record Found</td>
                </tr>
            </tbody>
        )
    }
    return (
        <div>Body</div>
    )
}

export default Body