import React, {useState,useEffect,useRef} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddProduct() {

  const[catdata,setData]=useState("");
  
  // // display category

   useEffect(()=>{
        axios.get(`http://localhost:3000/Category`).then((response)=>{
           setData(response.data);
        })

    });


    const [item,setItem]=useState("");
    const {id} = useParams();
    const navigate=useNavigate();
    
// stored data or add teams via admin
const catname=useRef("");
const itemphoto=useRef("");
const itemname=useRef("");
const itemprice=useRef("");


// create a event handeling add data via form
const EditCategoryData=(e)=>{
   e.preventDefault();      
   var upd={
    catname:catname.current.value,
    itemphoto:itemphoto.current.value,
    itemname:itemname.current.value,
    itemprice:itemprice.current.value
   } 

  //add data via axios.post
  axios.put(`http://localhost:3000/add-item/${id}`,upd).then(()=>{
    // pass a messages
    Swal.fire({
        title: "Congratulations!",
        text: "Your team addedd successfully!",
        icon: "success"
      });

  })
  navigate('/admin-login/add-product');
      e.target.reset();
  
}


 // Apply useEffect

 useEffect(()=>{
  axios.get(`http://localhost:3000/add-item/${id}`).then((response)=>{
    setItem(response.data);

    catname.current.value =response.data.catname;
    itemphoto.current.value=response.catdata.itemphoto;
    itemname.current.value=response.catdata.itemname;
    itemprice.current.value=response.catdata.itemprice;

  })
},[]);


  return (
    <div>
       <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
    <div className='w-full p-16'>
    <h1 className='text-4xl text-pink-600 ms-0'>Edit Products</h1>
    <hr className='border border-2 border-pink-600 w-20' />
    <form>

    <div className='form-group mt-3'>
<select  type='text' placeholder='select category *' required className='w-3/4 p-2 border-1'>
<option value="">-select Category-</option>

{catdata && catdata.map((item)=>{
    return (
        <>
      
        <option value={item.catname}>{item.catname}</option>
        </>
    )
})}

</select>
</div>
    
        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter PHoto URL *' ref={itemphoto} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter Item name *' ref={itemname} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>

  
        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter Price *' ref={itemprice} className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>

        <div className='form-group mt-3'>
          <input type='submit'  onClick={EditCategoryData} value="Update Product" className='w-3/4 p-3 border-1 bg-black text-white' />
        </div>
  </form> 
  
  {/* <div className='p-0 flex flex-nowrap w-full mt-10'>
<table className='table table-auto space-x-10 gap-5  p-5 ' width="70%">
    {item && item.map((rows)=>{
        return(
            <>
          <tr>
          <td><img src={rows.itemphoto} alt='photo' className='img-fluid' style={{width:"55px", height:"55px"}} /></td>
          
           <td  className='m-5 p-5'>{rows.catname}</td>
           <td className='m-5 p-5'>{rows.itemname}</td>
           <td>{rows.itemprice}</td>
           
           <div className='form-group mt-5'>
            <button type='button' className='form-control p-3 bg-black text-white w-116'>Update Category</button>
            </div>
           
           </tr>
            </>
        )
    })}
   
</table>
</div>    */}

    </div>

    </div>

    </div>
  )
}
