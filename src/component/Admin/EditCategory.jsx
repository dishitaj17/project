import React,{useState,useEffect,useRef} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate,useParams } from 'react-router-dom';


export default function AddCategory() {

//destrucured of category 
  const[cat,setData]=useState("");
  const {id}=useParams();

  // Add category
  const catname=useRef("");
  const catdesc=useRef("");
  const navigate=useNavigate();

  // Call event Handeling function
  const EditCategoryData=()=>{
    var upd={
      catname:catname.current.value,
      catdesc:catdesc.current.value,
    }

    // call API/

    axios.put(`http://localhost:3000/Category/${id}`,upd).then(()=>{
      Swal.fire({
              title: "Thank you",
              text: "Category Updated successfully",
              icon: "success"
            });
      
            navigate('/admin-login/add-category');
      
            //   ak data store thai jai pachi form fari reset thai refresh thai
          e.target.reset();
    })
  } 

  // add data in database into manage category

  useEffect(()=>{
    axios.get(`http://localhost:3000/Category/${id}`).then((response)=>{
      setData(response.data);

         catname.current.value =response.data.catname;
         catdesc.current.value=response.data.catdesc;

    })
  },[]);

  

return (
    <>
    <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
    <div className='w-full p-8 flex flex-row'>
    <div className='w-1/2'>
    <h1 className='text-4xl text-yellow-800 ms-0'>Update Category</h1>
    <hr className='border border-2 border-yellow-600 w-20' />

      <form >
        <div className='form-group mt-10'>
            <input type='text' ref={catname} placeholder='Enter Category Name *' className='form-control p-3 border border-2 border-yellow-600 w-116' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' ref={catdesc} placeholder='Category decsriptions *' className='form-control p-3 border border-2 border-yellow-600 w-116' />
        </div>

        
        <div className='form-group mt-5'>
            <button type='button' onClick={EditCategoryData} className='form-control p-3 bg-black text-white w-116'>Update Category</button>
           
        </div>
        </form>
        </div>

    </div>

    </div>

    </>
  )
}
// Edit