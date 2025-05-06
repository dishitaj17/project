import React, {useState, useEffect, useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ProductDetails() {

    // stored a data 
const[proddata,setProdData]=useState([]);

const{id}=useParams();
const navigate= useNavigate();

const images=useRef("");
const itemphoto=useRef("");
const itemname=useRef("");
const itemprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");

// fetch dynamic products details 
useEffect(()=>{ 
axios.get(`http://localhost:3000/add-product/${id}`).then((response)=>{
  // setProdData(response.data);

  images.current.src=response.data.itemphoto;
  itemphoto.current.value=response.data.itemphoto;
   itemname.current.value=response.data.itemname;
   itemprice.current.value=response.data.itemprice;
  qty.current.value=response.data.qty;
   descriptions.current.value=response.data.descriptions;
});

},[]);

// add products in cart

const addCartFormData=(e)=>
   {
   e.preventDefault();
       // data stored via api 
       var addcart={
           itemphoto:itemphoto.current.value,
           itemname:itemname.current.value,
           itemprice:itemprice.current.value,
          qty:qty.current.value,
           descriptions:descriptions.current.value
       }
       axios.post(`http://localhost:3000/cart`,addcart).then(response => response.json())
       .then(json => console.log(json));
       Swal.fire('Products added in cart successfully')
   
       navigate('/cart');
       
   }

   
  return (
    <div>
      <Header />

      <section className='p-5 mt-5'>
<h1 className='bg-black text-white p-2'>Home | Products Details</h1>

<form onSubmit={addCartFormData}>


<div className='col-md-5 shadow mt-4'>
<p className='text-center'><img src={images} alt=''ref={images} style={{width:"", height:"170px"}} /></p>
</div>
<div className='col-md-7 mt-4 text-start'>

<p className='h3 ms-3'><input type='text'  ref={itemname}  /></p>

<p className='h6 ms-3'>Rs.<input type='text' ref={itemprice}  /></p>

<label className='ms-3'>select qty</label>
<br />
<p className='ms-3'><input type='number' min="1" max="10"  ref={qty}  className='form-control w-50 border border-1'  /></p> 


<p className='ms-3 h3 bvg-dark text-dark'>Products Descriptions :</p>
<br/>
<textarea  ref={descriptions} readOnly style={{border:"none",width:"100%",height:"auto"}}></textarea>

<p className='ms-3 mt-5'>
<Link to="/"><button type='button' className='bg-green-500 text-white'>ContinueShopping</button></Link>

<button type='submit' onClick={()=>navigate(`/cart/${item.id}`)}  className='  ms-4 bg-black text-white'>AddToCart</button>
</p>
</div>

</form>
</section>

    <Footer />
    </div>
  )
}
