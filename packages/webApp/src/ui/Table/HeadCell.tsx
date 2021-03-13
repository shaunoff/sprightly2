import React, { useContext } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

export interface HeadCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const HeadCell = React.forwardRef<HTMLTableCellElement, HeadCellProps>(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const {
    theme: { tableHeadCell },
  } = useTheme()

  const baseStyle = tableHeadCell.base

  const cls = clsx(baseStyle, className)

  return (
    <th scope="col" className={cls} ref={ref} {...other}>
      {children}
    </th>
  )
})

export default HeadCell
