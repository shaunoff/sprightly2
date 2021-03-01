import React from 'react'
import { useTheme } from './theme/ThemeContext'
import clsx from 'clsx'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The initials of the user
   */
  initials: string
  /**
   * The size of the avatar
   */
  size?: 'small' | 'regular' | 'large'
  /**
   * Cutom styles for the container
   */
  containerClasses?: string
  /**
   * Cutom styles for the text
   */
  textClasses?: string
  /**
   * The source for the avatar image
   */
  src?: string
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    theme: { avatar },
  } = useTheme()
  const { initials, size = 'small', containerClasses, textClasses } = props
  const baseStyle = avatar.base
  const containerStyles = {
    large: avatar.container.large,
    regular: avatar.container.regular,
    small: avatar.container.small,
  }
  const textStyles = {
    large: avatar.text.large,
    regular: avatar.text.regular,
    small: avatar.text.small,
  }
  const containerCls = clsx(baseStyle, containerStyles[size], containerClasses)
  const textCls = clsx(textStyles[size], textClasses)
  return (
    <span className={containerCls}>
      <span className={textCls}>{initials}</span>
    </span>
  )
}

export default Avatar
