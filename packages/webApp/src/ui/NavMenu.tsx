import React from 'react'
import { useTheme } from './theme/ThemeContext'
import clsx from 'clsx'

interface NavMenuProps {
  children: any
}

const NavMenu: React.FC<NavMenuProps> = (props: NavMenuProps) => {
  const { children } = props
  const {
    theme: { navMenu },
  } = useTheme()

  const containerStyles = clsx(navMenu.container)
  const navStyles = clsx(navMenu.nav)

  return (
    <div className={containerStyles}>
      <nav className={navStyles}>{children}</nav>
    </div>
  )
}

export default NavMenu
