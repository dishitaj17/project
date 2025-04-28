import React, {useState, useEffect} from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'
import loaderimg from './assets/images/loader2.gif'


export default function Layout() {

   // destructuring of data
   const[loader,setLoader]=useState(true);
   // create a function or hooks of useEffect to load promises for loader
   useEffect(()=>{
   //call a function for loader to load for a time
   setTimeout(()=>{
      setLoader(false);
   },3000)
   });

   
  return (
    loader ?
    <>
      <div className='loader-app'>
        <img src={loaderimg} alt='loader-photo' />
      </div>   
    </> 
    :

    <div>
      <Header/>
      <Content/>
      <Footer/>
      
    </div>
  )
}
