import React from 'react'
import SidebarContent from './SidebarContent'

const DesktopSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
          <SidebarContent />
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar
