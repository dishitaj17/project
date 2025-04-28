import React, {useEffect,useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';


export default function Checkout() {
  const[data,setData]=useState(0);
useEffect(()=>{
axios.get(`http://localhost:3000/cart`).then((response)=>{
setData(response.data);
})

},[data]);

  return (
    <div>
      <Header/>
      <div className='row'>
        <div className='col-md-7 p-4'>
            <h4>Fill all required(*) customers details for Order</h4>
            <form>
             <div className='form-group'>
                <input type='' placeholder='FirstName' className='form-control' />
                <input type='' placeholder='LastName' className='form-control ms-3' />
             </div>   

             <div className='form-group mt-3'>
                <input type='text' placeholder='email' className='form-control' />
             </div>   

             <div className='form-group mt-3'>
                <input type='text' placeholder='Phone' className='form-control' />
             </div>   
             <div className='form-group mt-3'>
                <textarea type='text' placeholder='Home address for orders' className='form-control'></textarea>
             </div>   
            </form>

        </div>
        
        <div className='col-md-5'>
        <p className='ms-5 fs-4'>Summary of Cart <span className='bi bi-cart'><span className=' text-white'></span></span></p>
        <table className='table table-responsive table-bordered' width="100%">
          {data && data.map((item)=>{
            return(
            <>
         <tr className=''>
          <td><img src={item.itemphoto}  style={{width:"65px",height:"65px"}} /></td>
          <td>{item.itemname}</td>
          <td>{item.itemprice}</td>
         
         </tr>
        
            </>
          )})}
        

          <tr className='p-3'>
            <td colSpan="6" className='p-3'><button type='button' className='w-100 fs-5 float-end btn btn-dark bg-dark text-white'>Go for Payments</button></td>
          </tr>
        
        
          </table> 
        </div>
       
       </div>
       <Footer/>
    </div>
  )
}
