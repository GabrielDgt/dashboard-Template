import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  )
}

export default AuthLayout