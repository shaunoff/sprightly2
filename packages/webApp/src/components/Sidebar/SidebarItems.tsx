import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement | Array<ReactElement>
}

const SidebarItems = ({ children }: Props): ReactElement => {
  return (
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 bg-white space-y-1">{children}</nav>
    </div>
  )
}

const SidebarItem: React.FC = () => {
  return (
    <a href="#" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
      <svg
        className="text-gray-500 mr-3 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      Dashboard
    </a>
  )
}
const SidebarItem2: React.FC = () => {
  return (
    <a
      href="#"
      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
    >
      <svg
        className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
      Reports
    </a>
  )
}

SidebarItems.Item = SidebarItem
SidebarItems.Item2 = SidebarItem2

export default SidebarItems
