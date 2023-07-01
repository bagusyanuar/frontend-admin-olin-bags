import Table from './table'

export type HeaderType = { value: string, className?: string | undefined, sort?: boolean | undefined, childClassName?: string }
export type RowType = { original: any, row: Array<any> }
export type ColumnFormat = { value?: string | undefined | null, render?: (data: any) => any, className?: string, childClassName?: string }

export interface TableProps { headers: Array<HeaderType>, data: Array<any>, columns: Array<ColumnFormat>, withIndex?: boolean }
export interface HeaderProps { headers: Array<HeaderType>, withIndex?: boolean }
export interface BodyProps {data: Array<RowType>, headers: Array<HeaderType>, columns: Array<ColumnFormat>, withIndex?: boolean}

export default Table