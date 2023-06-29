import React from 'react'
import { TextfieldIconProps } from '..'

function Prefix({
    type = 'text',
    icon = 'circle',
    onChange,
    value,
    className = '',
    placeholder = '',
    disabled = false
}: TextfieldIconProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let value: string = e.currentTarget.value
        onChange(e, value)
    }
    return (
        <label className="relative text-gray-400 focus-within:text-gray-600 block mb-2">
            <span className="material-symbols-outlined pointer-events-none w-4 h-4 absolute top-2.5 left-3 text-sm">
                {icon}
            </span>
            <input
                disabled={disabled}
                onChange={handleChange}
                type={type}
                value={value}
                placeholder={placeholder}
                className={`text-sm form-input rounded-md border border-slate-400 py-2 px-2 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-8 focus:outline-none focus:border-slate-500 ${className}`} />
        </label>
    )
}

export default Prefix