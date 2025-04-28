import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cart() {
  // manage all contact us data in admin panel
const[data,setData]=useState(0);
useEffect(()=>{
axios.get(`http://localhost:3000/cart`).then((response)=>{
setData(response.data);
})

},[]);

  return (
    <div>
      <Header/>
        <div>
        <p className='ms-5 fs-4'>ViewCart <span className='bi bi-cart'><span className='badge badge-sm bg-danger text-white'></span></span></p>
        <table className='table table-responsive table-bordered' width="100%">
          {data && data.map((item)=>{
            return(
            <>
       
         <tr className=''>
          <td><img src={item.itemphoto}  style={{width:"150px",height:"115px"}} /></td>
          <td>{item.itemname}</td>
          <td>{item.itemrice}</td>

          <td><input type='number' min="1" max="10" value="1" className='form-control border border-0' /></td>

          <td><button type='button' className='btn btn-sm   fs-1 float-end'>&times;</button></td>
         </tr>
        
            </>
          )})}
          <tr className='p-3'>
            <td colSpan="6" className='p-3'><Link to='/checkout-here'><button type='button' className='float-end  bg-black text-white'>Checkout here</button></Link></td>
          </tr>
        
          </table> 
        </div>
      <Footer/>
    </div>
  )
}
