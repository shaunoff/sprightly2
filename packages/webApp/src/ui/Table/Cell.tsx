import React, { useContext } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface CellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const Cell = React.forwardRef<HTMLTableCellElement, CellProps>(function Cell(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableCell },
  } = useTheme()

  const baseStyle = tableCell.base

  const cls = clsx(baseStyle, className)

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  )
})

export default Cell
