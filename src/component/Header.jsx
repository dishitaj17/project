import React from 'react'
import logo from '../assets/images/logo.webp'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <section id='icecream-header' className='container-fluid w-full p-5 flex flex-row shadow-2xl justify-around'>
     <div className='logo '>
      <img src={logo} alt='logo' id='logo' className='img-fluid' />
     </div>
     <div className='choco-navbar'>
      <ul className='navbar navbar-expand-md flex space-x-8 ms-20 mt-4 text-2xl font-semibold'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/our-products">Our Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
     </div>
     <div className='icecrean-buy-now mt-2 ms-16'>
      <Link to='/cart'><button className='font-medium rounded-full bg-yellow-900 p-3 w-36 text-white' type='button'>Add to Cart <span className='bi bi-cart'></span></button></Link>
     </div> 
    </section>
  )
}

