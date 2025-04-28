import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
  return (
    <div className='bg-black px-10 py-16 text-white h-full'>
    <div className='flex'>
    <img src='https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg' className='rounded-full w-20 h-20  mx-auto object-cover ' /> <b className=' ms-5 flex mt-5 text-white'>Admin Panel</b>
    
    </div>
    <hr className='border border-1 border-white mt-5' />
    <ul className='admin-sidebar'>
        <li className='pb-4 pt-5'><Link to="/admin-login/dashboard"><span className='bi bi-house'></span> Dashboard</Link></li>
       
        <li className='pb-5'><Link to="/admin-login/add-category"><span className='bi bi-cart'></span> Add Category</Link></li>
         
        <li className='pb-5'><Link to="/admin-login/add-product"><span className='bi bi-cart'></span> Add Products</Link></li>
        
        <li className='pb-5'><Link to="/admin-login/manage-orders"><span className='bi bi-truck'></span> Manage Orders</Link></li>
        
        <li className='pb-5'><Link to="/admin-login/admin-contact"><span className='bi bi-phone'></span> Manage Contacts</Link></li>
        
        <li className='pb-5'><Link to="/admin-login/manage-reviews"><span className='bi bi-chat'></span> Manage Reviews</Link></li>
        
        <li className='pt-8'><Link to="" className='bg-yellow-800 p-2 '><span className='bi bi-power'></span> Logout</Link></li>
    </ul>
      
    </div>
  )
}