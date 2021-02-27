import React from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarItems from './SidebarItems'

const SidebarContent: React.FC = () => {
  return (
    <>
      <SidebarLogo />
      <SidebarItems>
        <SidebarItems.Item />
        <SidebarItems.Item2 />
        <SidebarItems.Item2 />
        <SidebarItems.Item2 />
        <SidebarItems.Item2 />
        <SidebarItems.Item2 />
        <SidebarItems.Item2 />
      </SidebarItems>
    </>
  )
}

export default SidebarContent
