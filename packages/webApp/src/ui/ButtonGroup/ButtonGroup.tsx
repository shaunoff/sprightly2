import React, { ReactElement } from 'react'
import { useTheme } from '../theme/ThemeContext'
import clsx from 'clsx'
import { ButtonProps } from '../Button'

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The initials of the user
   */
  children: ReactElement<ButtonProps>[]
}

const ButtonGroup = React.forwardRef<HTMLSpanElement, ButtonGroupProps>(function ButtonGroup(
  props: ButtonGroupProps,
  ref,
) {
  const { className, children, ...rest } = props
  const {
    theme: { buttonGroup },
  } = useTheme()

  const containerCls = clsx(buttonGroup, className)
  const length = React.Children.count(children)
  const buttons = React.Children.map(children, (child: ReactElement<ButtonProps>, index) => {
    const buttonOverrideCls = clsx(
      ' -ml-px relative rounded-none',
      index === 0 && 'relative ml-0 rounded-l-md',
      index === length - 1 && 'rounded-r-md',
    )
    return React.cloneElement(child, { layout: 'white', className: buttonOverrideCls })
  })

  return (
    <span className={containerCls} {...rest} ref={ref}>
      {buttons}
    </span>
  )
})

export default ButtonGroup
