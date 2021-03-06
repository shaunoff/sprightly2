import React from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarItems from './SidebarItems'
import NavMenu from '../../ui/NavMenu'
import NavMenuItem from '../../ui/NavMenuItem'

const SidebarContent: React.FC = () => {
  return (
    <>
      <SidebarLogo />
      <NavMenu>
        <NavMenuItem icon="home" label="Dashboard" to="/" end />
        <NavMenuItem icon="chartBar" label="Reporting" to=":id" />
        <NavMenuItem icon="folder" label="Projects" to="me" />
      </NavMenu>
    </>
  )
}

export default SidebarContent
