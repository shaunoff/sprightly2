import React, { forwardRef } from 'react'
import { useTheme } from './theme/ThemeContext'
import Icon from './Icon'
import clsx from 'clsx'

interface Props extends React.ComponentPropsWithRef<'input'> {
  valid?: boolean
  disabled?: boolean
  error?: boolean
  label?: string
  value?: string
  name?: string
  message?: string
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(props: Props, ref) {
  const { valid, disabled, type = 'text', label, error, name, message } = props

  const {
    theme: { input },
  } = useTheme()

  const labelStyle = input.label
  const iconStyle = clsx(error && input.icon.error, valid && input.icon.valid)
  const containerStyle = clsx(input.container.base, error && input.container.error, valid && input.container.valid)
  const inputStyle = clsx(error ? input.input.error : valid ? input.input.valid : input.input.base)
  const helperTextStyle = clsx(input.helperText.base, error && input.helperText.error, valid && input.helperText.valid)
  const disabledStyle = clsx(disabled && input.disabled)

  return (
    <div className={disabledStyle}>
      <label htmlFor={name} className={labelStyle}>
        {label}
      </label>
      <div className={containerStyle}>
        <input className={inputStyle} ref={ref} {...props} type={type} />
        <div className={input.icon.base}>
          <Icon className={iconStyle} icon={error ? 'exclamationCircle' : valid ? 'checkCircle' : null} />
        </div>
      </div>
      <p className={helperTextStyle}>{message}</p>
    </div>
  )
})

export default Input
