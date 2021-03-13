import React, { useContext } from 'react'
import clsx from 'clsx'
import { useTheme } from './theme/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Backdrop = React.forwardRef<HTMLDivElement, Props>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const {
    theme: { backdrop },
  } = useTheme()

  const baseStyle = backdrop.base
  const colorStyle = backdrop.color

  const cls = clsx(baseStyle, colorStyle, className)

  return <div className={cls} ref={ref} {...other}></div>
})

export default Backdrop
