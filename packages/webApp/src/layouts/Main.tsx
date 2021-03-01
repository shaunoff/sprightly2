import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Main: React.FC = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header />
      </div>
    </div>
  )
}

export default Main
