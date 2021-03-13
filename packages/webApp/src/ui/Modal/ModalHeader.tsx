import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const ModalHeader = React.forwardRef<HTMLHeadingElement, HeaderProps>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modal },
  } = useTheme()

  const baseStyle = modal.header

  const cls = clsx(baseStyle, className)

  return (
    <h3 className={cls} ref={ref} {...other}>
      {children}
    </h3>
  )
})

export default ModalHeader
