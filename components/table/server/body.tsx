import React from 'react'
import { BodyProps } from '.'

function Body({
    data,
    headers,
    columns,
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
        <tbody>
            <NoPaginationBody headers={headers} data={data} withIndex={withIndex} columns={columns} />
        </tbody>
    )
}

export default Body

const NoPaginationBody = ({
    headers,
    data,
    columns,
    withIndex = false
}: BodyProps) => {
    return (
        <>
            {
                data.map((row, index) => {
                    return (
                        <tr key={index} className='bg-white border-b'>
                            {withIndex ? <td className={`px-6 py-3 text-gray-500 whitespace-nowrap w-1`}>{(index + 1)}</td> : ''}
                            {
                                headers.map((v, i) => {
                                    let className = columns[i].className ?? ''
                                    let childClassName = columns[i].childClassName ?? ''
                                    return (
                                        <td key={i} className={`px-6 py-3 text-gray-500 ${className}`}>
                                            <span className={`w-full flex ${childClassName}`}>{row.row[i]}</span>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </>
    )
}