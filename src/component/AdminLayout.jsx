import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import AdminSidebar from './Admin/AdminSidebar'
import Dashboard from './Admin/Dashboard'
import AdminFooter from './Admin/AdminFooter'

export default function AdminLayout() {
  return (
    <div>
    <AdminHeader />

     <div className='flex flex-row'>

      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>

      {/* dashboard */}
      <div className='w-full h-full'>
          <Dashboard /> 
      </div>

     </div>
     <AdminFooter/>

    </div>
  )
}
