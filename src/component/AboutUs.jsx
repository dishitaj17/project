import React from 'react'
import Header from './Header'
import Footer from './Footer'
import banner from '../assets/images/about-us-img.jpg'
import auther from '../assets/images/author.png'

export default function AboutUs() {
  return (
    <div>
        <Header/>
      {/* banner area */}
<section id='banner'>
<div className='container mx-auto mt-2'>
{/* {user && user.email} */}

<img src={banner} alt='banner' className='img-fluid w-full h-128' />
</div>
</section>

<section id='about-us ' className='container mx-auto'>
    <p className='text-center pb-5 mt-10 text-xl'>CHOCO LOVE</p>
    <h1 className='text-yellow-900 text-6xl font-medium text-center'>ABOUT US</h1>

    <div className='mx-auto mt-4 flex flex-row container'>
        <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut a Excepteur.</p>
        </div>
        <div className=''>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut a Excepteur.</p>
        </div>
    </div>
    <div className='mx-auto text-center'>
        <img src={auther} alt="" className='mx-auto text-center mt-5'/>
        <p className='text-center pb-5 text-xl'>Maria T. Jones</p>
    </div>

</section>
    <Footer />
    </div>
  )
}
