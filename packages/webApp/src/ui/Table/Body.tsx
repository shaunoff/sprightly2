import React, { useContext, ReactElement } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'
import { RowProps } from './Row'

export interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  striped?: boolean
}

const Body = React.forwardRef<HTMLTableSectionElement, BodyProps>(function Body(props: BodyProps, ref) {
  const { className, children, striped, ...other } = props

  const {
    theme: { tableBody },
  } = useTheme()

  const baseStyle = tableBody.base

  const cls = clsx(baseStyle, className)
  const indexChildren = React.Children.map(
    children as ReactElement<RowProps>[],
    (child: ReactElement<RowProps>, index) => {
      return React.cloneElement(child, { index, striped })
    },
  )
  return (
    <tbody className={cls} ref={ref} {...other}>
      {indexChildren}
    </tbody>
  )
})

export default Body
