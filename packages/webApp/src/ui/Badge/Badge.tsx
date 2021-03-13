import React, { useContext } from 'react'
import clsx from 'clsx'
import { useTheme } from '../theme/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
  /**
   * The type of the badge
   */
  onClose?: () => void
}

const Badge = React.forwardRef<HTMLSpanElement, Props>(function Badge(props, ref) {
  const { className, children, type = 'primary', onClose, ...other } = props

  const {
    theme: { badge },
  } = useTheme()

  const closeStyle = !!onClose ? 'close' : 'default'
  const baseStyle = badge.base[closeStyle]
  const typeStyle = badge[type].default
  const buttonStyle = badge.base.closeButton
  const buttonTypeStyle = badge[type].close

  const badgeCls = clsx(baseStyle, typeStyle, className)
  const buttonCls = clsx(buttonStyle, buttonTypeStyle)
  return (
    <span className={badgeCls} ref={ref} {...other}>
      {children}
      {!!onClose && (
        <button type="button" className={buttonCls}>
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  )
})

export default Badge
