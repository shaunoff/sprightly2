import React from 'react'

const SidebarLogo: React.FC = () => {
  return (
    <div className="flex items-center flex-shrink-0 px-4">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      />
    </div>
  )
}

export default SidebarLogo
