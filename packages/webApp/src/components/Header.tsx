import React, { useState } from 'react'
import useAuth from '../auth/useAuth'
import Avatar from '../ui/Avatar'
import Dropdown from '../ui/Dropdown'
import DropdownItem from '../ui/DropdownItem'

const Header: React.FC = () => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex"></div>
        <div className="ml-4 flex items-center md:ml-6">
          <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <Profile />
        </div>
      </div>
    </div>
  )
}

const Profile = () => {
  const [open, setOpen] = useState(false)
  const { logout } = useAuth()
  const handleProfileClick = () => {
    setOpen(!open)
  }
  return (
    <div className="ml-3 relative">
      <div>
        <button
          className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="user-menu"
          aria-haspopup="true"
          onClick={handleProfileClick}
        >
          <span className="sr-only">Open user menu</span>
          <Avatar initials="SH" />
        </button>
      </div>
      <Dropdown isOpen={open} onClose={() => setOpen(false)}>
        <DropdownItem icon={Icon}>Your Profile</DropdownItem>
        <DropdownItem onClick={logout}>Sign out</DropdownItem>
      </Dropdown>
    </div>
  )
}

const Icon = () => (
  <svg
    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
)

export default Header
