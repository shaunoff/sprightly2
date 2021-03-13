import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLDivElement, FooterProps>(function ModalFooter(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modal },
  } = useTheme()

  const baseStyle = modal.footer

  const cls = clsx(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default ModalFooter
