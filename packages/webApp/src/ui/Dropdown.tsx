import React, { useEffect, useRef, forwardRef } from 'react'
import clsx from 'clsx'
import { useTheme } from './theme/ThemeContext'
import Transition from './Transition'
import FocusLock from 'react-focus-lock'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the dropdown is open
   */
  isOpen: boolean
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right'
}

const Dropdown: React.FC<Props> = forwardRef<HTMLDivElement, Props>(function Dropdown(props: Props, ref) {
  const { children, onClose, isOpen, className, align = 'right', ...other } = props
  const {
    theme: { dropdown },
  } = useTheme()

  const baseStyle = dropdown.base
  const alignStyle = dropdown.align[align]

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      e.stopPropagation()
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const cls = clsx(baseStyle, alignStyle, className)

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div ref={ref}>
        <FocusLock returnFocus>
          <div className={cls} ref={dropdownRef} aria-label="submenu" {...other}>
            {children}
          </div>
        </FocusLock>
      </div>
    </Transition>
  )
})

export default Dropdown
