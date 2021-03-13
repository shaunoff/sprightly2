import React, { useContext, ReactElement } from 'react'
import { useTheme } from '../theme/ThemeContext'
import clsx from 'clsx'

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  index?: number
  striped?: boolean
}

const Row = React.forwardRef<HTMLTableRowElement, RowProps>(function Body(props, ref) {
  const { children, index, striped, ...rest } = props
  const {
    theme: { tableRow },
  } = useTheme()

  const stripedStyle = tableRow.striped
  const rowCls = clsx(striped && index && index % 2 !== 0 && stripedStyle)
  return (
    <tr className={rowCls} ref={ref} {...rest}>
      {children}
    </tr>
  )
})

export default Row
