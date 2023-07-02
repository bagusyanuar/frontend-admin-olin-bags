import React from 'react'
import Modal from './modal'

export interface ModalProps {open: boolean, children: React.ReactNode, onClose?: () => void, title?: string}
export default Modal