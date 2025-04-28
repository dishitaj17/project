import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

export default function ManageCustomer() {
    
return (
    <div>
    <AdminHeader />
    
         <div className='flex flex-row'>
          {/* sidebar */}
          <div className='w-1/3 h-full'>
            <AdminSidebar />
          </div>
    
         
    <div className='w-full p-2'>
   <h1 className='text-3xl text-pink-600 font-bold ms-5 py-5 decoration-solid underline'>Manage All Customers</h1> 

   <table className='table-auto text-center w-full mt-10 border-1 border-separate border-spacing-[26px]'>
        <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>State</th>
            <th>Action</th>
        </tr>

        <tr className='text-center'>
            <td>1</td>
            <td>Dishita</td>
            <td>dishu@gmail.com</td>
            <td>27</td>
            <td>150 feet ring road</td>
            <td>912125454</td>
            <td>Gujrat</td>
            <td><button className='bg-red-600 text-white'><span className='bi bi-trash'></span></button></td>
        </tr>
     </table>
    
    </div>
    </div>
    </div>
  )
}