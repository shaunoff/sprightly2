import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { useTheme } from './theme/ThemeContext'
//import warn from './utils/warning'

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>

export interface Props {
  children?: ReactNode
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean
  /**
   * The size of the button
   */
  size?: 'xlarge' | 'large' | 'regular' | 'small' | 'xsmall' | 'pagination'
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType
  /**
   * The style of the button
   */
  layout?: 'white' | 'secondary' | 'primary' | '__dropdownItem'
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean
}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button' | 'a'
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a'
}

export interface ButtonAsOtherProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps

type Ref = ReactNode | HTMLElement | string

const Button = React.forwardRef<Ref, ButtonProps>(function Button(props: ButtonProps, ref) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    size = 'regular',
    layout = 'primary',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props

  const {
    theme: { button },
  } = useTheme()

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight
  }

  // warn(
  //   hasIcon() && !other['aria-label'] && !children,
  //   'Button',
  //   'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.',
  // )

  const IconLeft = iconLeft || icon
  const IconRight = iconRight

  const baseStyle = button.base
  const blockStyle = button.block

  const sizeStyles = {
    xlarge: button.size.xlarge,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
    xsmall: button.size.xsmall,
    /**
     * specific to pagination.
     */
    pagination: button.size.pagination,
  }
  const iconSizeStyles = {
    xlarge: button.size.icon.xlarge,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
    xsmall: button.size.icon.xsmall,
    pagination: button.size.icon.regular,
  }
  const iconStyle = button.icon[size]
  //const iconStyle = button.icon[size]
  const layoutStyles = {
    primary: button.primary.base,
    secondary: button.secondary.active,
    white: button.white.base,
    //link: button.link.base,
  }
  const activeStyles = {
    primary: button.primary.active,
    secondary: button.secondary.active,
    white: button.white.active,
    //link: button.link.active,
  }
  const disabledStyles = {
    primary: button.primary.disabled,
    secondary: button.secondary.disabled,
    white: button.white.disabled,
  }

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */

  const dropdownItemStyle = button.dropdownItem.base

  const buttonStyles =
    layout === '__dropdownItem'
      ? clsx(dropdownItemStyle, className)
      : clsx(
          baseStyle,
          // has icon but no children
          hasIcon() && !children && iconSizeStyles[size],
          // has icon and children
          hasIcon() && children && sizeStyles[size],
          // does not have icon
          !hasIcon() && sizeStyles[size],
          layoutStyles[layout],
          disabled ? disabledStyles[layout] : activeStyles[layout],
          block ? blockStyle : null,
          className,
        )

  const iconLeftStyles = clsx(iconStyle, children ? button.icon.left : '')
  const iconRightStyles = clsx(iconStyle, children ? button.icon.right : '')

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft ? React.createElement(IconLeft, { className: iconLeftStyles, 'aria-hidden': true }) : null,
    children,
    IconRight ? React.createElement(IconRight, { className: iconRightStyles, 'aria-hidden': true }) : null,
  )
})

export default Button
