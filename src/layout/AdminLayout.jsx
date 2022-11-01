import React from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-8'>
        <Sidebar /> 
      <div className='xl:col-span-7'>
        <Header/>
          <div className="h-[90vh] overflow-y-scroll p-8 no-scrollbar">
            <Outlet />
          </div>
      </div>
    </div>
  )
}

export default AdminLayout