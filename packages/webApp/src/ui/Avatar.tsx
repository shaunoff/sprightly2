import React from 'react'
import { useTheme } from './theme/ThemeContext'

const Avatar: React.FC = () => {
  const hello = useTheme()
  console.log(hello)
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
      <span className="font-medium leading-none text-white text-base">TW</span>
    </span>
  )
}

export default Avatar
