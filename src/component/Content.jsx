import React from 'react'
import product1 from '../assets/images/section1.jpg'
import product2 from '../assets/images/section1 (2).jpg'
import product3 from '../assets/images/section1(3).jpg'
import product4 from '../assets/images/section1(4).jpg'
import about from '../assets/images/about1.jpg'
import img1 from '../assets/images/img1-remove.png'
import img2 from '../assets/images/img2-remove.png'
import img3 from '../assets/images/img3-remove.png'
import img4 from '../assets/images/img4-remove.png'
import img5 from '../assets/images/img5-remove.png'
import img6 from '../assets/images/img6-remove.png'
import offer1 from '../assets/images/offer1.jpg'
import offer2 from '../assets/images/offer2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/images/banner1.jpg'
import slide2 from '../assets/images/banner2.jpg'
import slide3 from '../assets/images/banner3.jpg'


export default function Content() {


  return (
    <div>

<div className="w-full ">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt="Slide 1"
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 2"
            className="w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="Slide 3"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
      
      <section className='product1'>
        <div className='pb-8 xl:pb-16'>
          <p className='text-center pb-5 mt-10 text-sm xl:text-xl '>chocolate ganache</p>
          <h1 className='text-base  xl:text-6xl text-yellow-900  font-medium text-center'>WE CREATE LOVELY <br /><span>MEMORIES</span></h1>
        </div>

        <div className='flex flex-row  mx-auto cards'>
            <div className='card w-1/2 xl:w-1/4 px-5'>
              <img src={product1} alt="" />
              <p className='text-center p-2 xl-p-5 text-base xl:text-3xl font-semibold '>Chocolate Truffles</p>
              <p className='text-center text-sm xl-p-2 xl-text-xl font-semibold'>$29.00</p>
            </div>

            <div className='card w-1/2 xl:w-1/4 px-5'>
              <img src={product2} alt="" />
              <p className='text-center p-2 xl-p-5 text-base xl:text-3xl font-semibold '>Choco Pralines
              </p>
              <p className='text-center p-2 xl-p-5 text-base xl:text-3xl font-semibold'>$31.00</p>
            </div><br />

            <div className='card w-1/2 xl:w-1/4 px-5'>
              <img src={product3} alt="" />
              <p className='text-center p-2 xl-p-5 text-base xl:text-3xl font-semibold '>Choco Bar</p>
              <p className='text-center p-2 text-xl font-semibold'>$52.00</p>
            </div>

            <div className='card w-1/2 xl:w-1/4 px-5'>
              <img src={product4} alt="" />
              <p className='text-center p-2 xl-p-5 text-base xl:text-3xl font-semibold '>Dark Chocolate
                </p>
              <p className='text-center p-2 text-xl font-semibold'>$43.00</p>
            </div>
        </div>
      </section>

      
<section className='about mt-30'>

<div className='flex flex-row '>
  <div className='w-1/2 px-20'>
    <img src={about} alt="" />
  </div>

  <div className='w-1/2 pt-5 text-center'>
    <p className='text-center font-xl pb-5'>sweet taste</p>
    <h1 className='text-yellow-900 text-6xl font-medium '>THE BEST <br /> PRALINES IN  <br />TOWN!</h1>
    <p className='text-xl font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit inate velit cillumdolore eu more cib.</p>
    
    <button className='font-medium rounded-full bg-yellow-900 px-5 py-3  w-50 ms-10 mt-10 text-white ' type='button'>READ MORE <span className='bi bi-arrow'></span></button>
  </div>
</div>

</section>

{/* for responsive */}
<section className=' about1 mt-10'>

<div className=''>
  <div className='w-full px-20'>
    <img src={about} alt="" />
  </div>

  <div className=' pt-5 text-center'>
    <p className='text-center font-sm pb-5'>sweet taste</p>
    <h1 className='text-yellow-900 text-xl font-medium '>THE BEST PRALINES IN  <br />TOWN!</h1>
    <p className='text-sm font-normal p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit inate velit cillumdolore eu more cib.</p>
    
    <button className='font-medium rounded-full bg-yellow-900 px-5 py-3  w-50 ms-10 mt-10 text-white ' type='button'>READ MORE <span className='bi bi-arrow'></span></button>
  </div>
</div>

</section>


      <section className='img-slider mb-20 mt-20'>
        <div className='flex flex-row justify-center '>
          <div className='px-4'>
            <img src={img1} alt="" />
          </div>

          <div className='px-4'>
            <img src={img2} alt="" />
          </div>

          <div className='px-4'>
            <img src={img3} alt="" />
          </div>

          <div className='px-4'>
            <img src={img4} alt="" />
          </div>

          <div className='px-4'>
            <img src={img5} alt="" />
          </div>

          <div className='px-4'>
            <img src={img6} alt="" />
          </div>
        </div>
      </section>

      <section className='offer'>
        <div className='flex flex-row p-5'>
          <div className='px-5 relative'>
            <img src={offer1} alt="" />

            <div className='absolute'>
            <h1 className='py-1 text-3xl font-semibold text-yellow-900'>Truffales Caremal</h1>
            <p className='py-1 text-lg font-normal '>Lorem ipsum dolor sit.</p>
            <button className='py-2 text-xl font-normal text-black'> <span className='bi bi-arrow-right'>  Know More</span></button> 
            </div>
          </div>

          <div className='px-5 relative'>
          <img src={offer2} alt="" />

          <div className='absolute '>
            <h1 className='py-1 text-3xl font-semibold text-yellow-900'>Peralines</h1>
            <p className='py-1 text-lg font-normal '>Lorem ipsum dolor sit.</p>
            <button className='py-2 text-xl font-normal text-black'> <span className='bi bi-arrow-right'>  Know More</span></button> 
        </div>
        </div>

        </div>
      </section>

      {/* for responsive */}

      <section className='offer1'>
        <div className=' p-5'>
          <div className='px-2 mb-5 relative'>
            <img src={offer1} alt="" />

            <div className='absolute'>
            <h1 className='py-1 text-lg font-semibold text-yellow-900'>Truffales Caremal</h1>
            <p className='py-1 text-sm font-normal '>Lorem ipsum dolor sit.</p>
            <button className='py-2 text-lg font-normal text-black'> <span className='bi bi-arrow-right'>  Know More</span></button> 
            </div>
          </div>

          <div className='px-2 relative'>
          <img src={offer2} alt="" />

          <div className='absolute '>
            <h1 className='py-1 text-lg font-semibold text-yellow-900'>Peralines</h1>
            <p className='py-1 text-sm font-normal '>Lorem ipsum dolor sit.</p>
            <button className='py-2 text-lg font-normal text-black'> <span className='bi bi-arrow-right'>  Know More</span></button> 
        </div>
        </div>

        </div>
      </section>

      <section className='service'>
          
      </section>
      
    </div>
  )
}

