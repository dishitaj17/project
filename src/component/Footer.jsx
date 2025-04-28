import React from 'react'
import logo from '../assets/images/logo.webp'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='bg-stone-50 my-16 p-16 footer'>
      <div className='flex flex-row'>
        <div className='ms-10 w-1/2 mt-16'>
            <img src={logo} alt='logo' id='Logo-footer' className='img-fluid' />
        </div>

        <div className='ms-10 w-1/2'>
        <h1 className='text-3xl font-semibold  text-yellow-900 py-5 '>Useful Links</h1>
            <p><Link to="/"> Home</Link></p>
            <p><Link to="/"> About Us</Link></p>
            <p> <Link to="/">Our Location</Link></p>
            <p><Link to="/">Shop</Link></p>
            <p><Link to="/">Contact us</Link></p>
        </div>

        <div className='ms-10 w-1/2'>
        <h1 className='text-3xl font-semibold  text-yellow-900 py-5'>Favourite</h1>
            <p>Orange Pralines</p>
            <p>Amaretti Oreo</p>
            <p>Choco Mousse</p>
            <p>Chocolate Truffles</p>
            <p>American Cake</p>
        </div>

        <div className='ms-10 w-1/2'>
        <h1 className='text-3xl font-semibold  text-yellow-900 py-5'>Newsletter</h1>
            <p>Subscribe to get special offers, free gifts and once-in-a-lifetime deals.</p>
            <form action="">
            <input type="email" placeholder='email' className='form-control w-full border border-bottom-2 p-2' />
            </form>
        </div>

      </div>
    </div>
  )
}
