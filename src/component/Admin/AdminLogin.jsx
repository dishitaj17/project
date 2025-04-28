import React from 'react'
import adminlogin from '../../assets/Admin-images/admin-login.jpg'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
  return (
    <div className='container p-16 mt-16 flex flex-row'>

     <div className='w-1/2 p-5'>
        <img src={adminlogin} alt='admin'  />
     </div>

     <div className='w-1/2 p-5'>
        <h1 className='text-3xl text-black font-extrabold'><span className="text-yellow-800">ROCHIE CHOCOLATES</span> Admin Login</h1>

        <hr className='border border-2 w-80' />
        <div className='form-group mt-5'>
            <input type='text' placeholder='Email *' className='form-control p-5 border border-2 border-black w-128' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='password' placeholder='Password *' className='form-control p-5 border border-2 border-black ' />
        </div>

        
        <div className='form-group mt-5'>
        <button className='font-medium rounded-full bg-yellow-800 px-6 py-2  w-50 ms-10 mt-10 text-white' type='submit'><Link to="/admin-login/dashboard">SignIn </Link></button>
            <b className='ms-5'>Forget Password ?</b>
        </div>
     </div>

      
    </div>
  )
}