import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Products() {

   // Distructuring data
   const[data,setData]=useState("");
   const navigate=useNavigate();

   // display data
   useEffect(()=>{
       axios.get(`http://localhost:3000/Category`).then((response)=>{
           setData(response.data);
       })

   },[]);

   // display r fetch add items from admins in customer panel
const[item,setItem]=useState("");
// display category
useEffect(()=>{
   axios.get(`http://localhost:3000/add-item`).then((response)=>{
     setItem(response.data)
   });
})

//  fetch dynamic products added via admin
 const[proddata,setProdData]=useState([]);
 useEffect(()=>{ 
 axios.get(`http://localhost:3000/add-product`).then((response)=>{
 setProdData(response.data);
 })

 },[]);


  return (
    <div>
      <Header />

      <div className='products'>
{/* category sidebar */}
<div className='category-sidebar p-5'>
<ul>
<li><Link to=""><h1 className='text-2xl font-mono'>Select Category</h1></Link></li>

{data && data.map((item)=>{
    return(
        <>
            <li><Link to="">{item.catname}</Link></li>
        </>
    )
})}

</ul>
</div>


{item && item.map((rows)=>{
    return(
        <>
        
  <div className='prod-app mt-4 p-16 '>
    <p className='text-center'><img src={rows.itemphoto} alt='flower' style={{width:"", height:"170px"}} /></p>

    <p className='text-xl  text-center'>{rows.itemname}</p>
    <p className='text-lg  text-center'>Rs. {rows.itemprice}-/</p>
    <p className='text-xl  text-center'><button className='bg-green-500 w-1/3 rounded text-white text-xl'>+</button></p>

    <p className='text-xl  text-center'><button type='button'  onClick={()=>navigate(`/products-details/${item.id}`)} className='bg-black  rounded text-white text-lg'>Click for details</button></p>

    </div>

    </>
    )
})}

</div>

      <Footer />
    </div>
  )
}
