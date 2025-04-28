import React from 'react'

export default function AdminHeader() {
  return (
    <div>
      <div className='w-full p-5 bg-amber-100 text-dark flex flex-row'>
     <div className='w-1/3'> <button className='text-2xl font-bold text-yellow-900'>Admin Panel<span className='bi bi-grid-3x3 ms-16 text-dark text-2xl'></span></button> </div>

     <div className='w-full'>
        <b className='ms-128'>Login as Admin at :</b>
        <b className='ms-16'>Welcome : Admin</b>
     </div>
    
    </div>
    </div>
  )
}
