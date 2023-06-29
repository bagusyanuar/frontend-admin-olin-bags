import React from 'react'
import Button from './button'
import WithLoading from './with-loading'

export interface ButtonProps {onClick: () => void, children: React.ReactNode, disabled?: boolean}
export interface ButtonLoadingProps extends ButtonProps {isLoading: boolean}

export const ButtonWithLoading = WithLoading
export default Button