import React from 'react'

const slider = [
    "./banner1.jpg",
    "./banner2.jpg",
    "./banner3.jpg",
  ]

export default function Carousel() {
  return (
    <div >
          <section className='carousel flex justify-center items-center h-screen'>
            <div className='mx-w-lg'>
              <Carousel>
                {slider.map((s)=>(
                  <img src={s}/>
                ))}
              </Carousel>
    
            </div>
    
    
    
          </section>
    
        </div>
  )
}
