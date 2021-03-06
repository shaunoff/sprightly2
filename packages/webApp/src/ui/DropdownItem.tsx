import React from 'react'
import { ButtonProps } from './Button'
import Button from './Button'
import { useTheme } from './theme/ThemeContext'

type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(props: ButtonProps, ref) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props

  const {
    theme: { dropdownItem },
  } = useTheme()

  const baseStyle = dropdownItem.base

  return (
    <Button layout="__dropdownItem" tag="a" ref={ref} role="menuitem" {...other}>
      {children}
    </Button>
  )
})

export default DropdownItem
