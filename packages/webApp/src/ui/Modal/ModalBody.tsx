import React from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLDivElement, BodyProps>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const {
    theme: { modal },
  } = useTheme()

  const baseStyle = modal.body

  const cls = clsx(baseStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default ModalHeader
