import React from 'react'
import { useTheme } from './theme/ThemeContext'
import clsx from 'clsx'
import Icon from './Icon'
import { Link, useResolvedPath, useLocation } from 'react-router-dom'
import icons from './icons'

interface NavMenuItemProps {
  label?: string
  className?: string
  to?: string
  end?: boolean
  icon?: keyof typeof icons
}

const NavMenuItem: React.FC<NavMenuItemProps> = (props: NavMenuItemProps) => {
  const { label, className, to = '', end = false, icon } = props
  const {
    theme: { navMenuItem },
  } = useTheme()

  const active = isActive({ to, end })
  const navItemStyles = clsx(navMenuItem.base, active ? navMenuItem.active : navMenuItem.default, className)
  const iconStyles = clsx(navMenuItem.icon.base, active ? navMenuItem.icon.active : navMenuItem.icon.default)
  return (
    <Link className={navItemStyles} to={to}>
      {icon && <Icon icon={icon} className={iconStyles} />}
      {label}
    </Link>
  )
}

interface isActive {
  end: boolean
  to: string
  caseSensitive?: boolean
}

/**
 * Used by React router under the hood to determine if a relative, nested "to" string is part of the actual URL
 */
const isActive = ({ to, caseSensitive = false, end }: isActive): boolean => {
  const location = useLocation()
  const path = useResolvedPath(to)
  let locationPathname = location.pathname
  let toPathname = path.pathname
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase()
    toPathname = toPathname.toLowerCase()
  }
  return end ? locationPathname === toPathname : locationPathname.startsWith(toPathname)
}

export default NavMenuItem
