import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Backdrop from '../Backdrop'
import Transition from '../Transition'
import FocusLock from 'react-focus-lock'
import { useTheme } from '../../ui/theme/ThemeContext'
import { HeaderProps } from './ModalHeader'
import { BodyProps } from './ModalBody'
import { FooterProps } from './ModalFooter'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the modal is open
   */
  isOpen: boolean
}

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> {
  Header: React.FC<HeaderProps>
  Body: React.FC<BodyProps>
  Footer: React.FC<FooterProps>
}

const Modal = React.forwardRef<HTMLDivElement, Props>(function Modal(props, ref) {
  const { children, onClose, isOpen, ...other } = props

  const {
    theme: { modal },
  } = useTheme()

  const baseStyle = modal.base

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modalComponent = (
    <Transition show={isOpen}>
      <>
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={onClose}>
            <Transition
              enter="ease-out duration-300"
              enterFrom="oopacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className={baseStyle} role="dialog" onClick={(e) => e.stopPropagation()} ref={ref} {...other}>
                <FocusLock returnFocus>{children}</FocusLock>
                {/* {children} */}
              </div>
            </Transition>
          </Backdrop>
        </Transition>
      </>
    </Transition>
  )

  return mounted ? createPortal(modalComponent, document.body) : null
}) as CompoundedComponent

export default Modal
