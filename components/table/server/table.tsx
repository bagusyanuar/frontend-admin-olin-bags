import React, { useState, useEffect } from 'react'
import { RowType, TableProps } from '.'
import Header from './header'
import Body from './body'
import { CreateTableData } from './utilities'

function Table({
  headers,
  data,
  columns,
  withIndex = false
}: TableProps) {

  const [rowData, setRowData] = useState<Array<RowType>>([])

  useEffect(() => {
    let results = CreateTableData(data, columns)
    setRowData(results)
  }, [data, columns])
  
  return (
    <div>
      <div className='relative overflow-auto shadow-md sm:rounded-lg border border-slate-200 mb-2'>
        <table className='rounded-md overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <Header headers={headers} withIndex={withIndex} />
          <Body data={rowData} headers={headers} withIndex={withIndex} columns={columns}/>
        </table>
      </div>
    </div>
  )
}

export default Table