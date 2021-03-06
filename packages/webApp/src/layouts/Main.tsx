import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Routes, Route } from 'react-router-dom'

const Main: React.FC = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* sidebar */}
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path=":id" element={<div>id</div>} />
          <Route path="me" element={<div>me</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default Main
