import React, { useContext } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, HeadProps>(function TableHeader(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableHead },
  } = useTheme()

  const baseStyle = tableHead.base

  const cls = clsx(baseStyle, className)

  return (
    <thead className={cls} ref={ref} {...other}>
      <tr>{children}</tr>
    </thead>
  )
})

export default TableHeader
