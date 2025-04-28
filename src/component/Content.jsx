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
import { useKeenSlider } from "keen-slider/react"
import slide1 from '../assets/images/banner1.jpg'





export default function Content() {

  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div>
      <section className='slider '>
      <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1  flex justify-center items-center "><img src={slide1} alt="" /></div>
      <div className="keen-slider__slide number-slide2 bg-blue-400 h-64 flex justify-center items-center text-white text-2xl">Slide 2</div>
      <div className="keen-slider__slide number-slide3 bg-green-400 h-64 flex justify-center items-center text-white text-2xl">Slide 3</div>
    </div>

      </section>

      <section className='product1'>
        <div className='pb-16'>
          <p className='text-center pb-5 mt-10 text-xl'>chocolate ganache</p>
          <h1 className='text-yellow-900 text-6xl font-medium text-center'>WE CREATE LOVELY <br /><span>MEMORIES</span></h1>
        </div>

        <div className='flex flex-row  mx-auto cards'>
            <div className='card w-1/4 px-5'>
              <img src={product1} alt="" />
              <p className='text-center p-5 text-3xl font-semibold '>Chocolate Truffles</p>
              <p className='text-center p-2 text-xl font-semibold'>$29.00</p>
            </div>

            <div className='card w-1/4 px-5'>
              <img src={product2} alt="" />
              <p className='text-center p-5 text-3xl font-semibold '>Choco Pralines
              </p>
              <p className='text-center p-2 text-xl font-semibold'>$31.00</p>
            </div>

            <div className='card w-1/4 px-5'>
              <img src={product3} alt="" />
              <p className='text-center p-5 text-3xl font-semibold '>Section Of Finest</p>
              <p className='text-center p-2 text-xl font-semibold'>$52.00</p>
            </div>

            <div className='card w-1/4 px-5'>
              <img src={product4} alt="" />
              <p className='text-center p-5 text-3xl font-semibold '>Dark Chocolate
                </p>
              <p className='text-center p-2 text-xl font-semibold'>$43.00</p>
            </div>
        </div>
      </section>

      <section className='about mt-50'>

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

      <section className='img-slider mt-20 mb-20'>
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

      <section className='service'>
          
      </section>
      
    </div>
  )
}

