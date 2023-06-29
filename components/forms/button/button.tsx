import React from 'react'
import { ButtonProps } from '.'

function Button({
    onClick,
    children,
    disabled = false
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className='flex items-center text-sm rounded-md py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 transition-colors ease-in duration-200'
        >
            {children}
        </button>
    )
}

export default Button