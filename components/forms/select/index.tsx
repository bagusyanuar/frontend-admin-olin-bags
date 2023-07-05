import React from 'react'
import Select from './select'

export type DataSelectType = { value: number | string, text: string }

export interface SelectProps { data: Array<DataSelectType>, onChange: (e: React.ChangeEvent<HTMLSelectElement>, v: string) => void }
export default Select