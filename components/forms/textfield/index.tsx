import React from 'react'
import Textfield from './textfield'
import PrefixIcon from './with-icon/prefix'

export interface TextfieldProps { type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void, className?: string, placeholder?: string, disabled?: boolean }
export interface TextfieldIconProps extends TextfieldProps {icon?: string}

export const TextfieldPrefixIcon = PrefixIcon
export default Textfield