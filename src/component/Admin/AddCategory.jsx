import React,{useState,useEffect,useRef} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ExportToExcel } from './ExportToExcel';


export default function AddCategory() {

//destrucured of category 
  const[catdata,setData]=useState("");

  // Add category
  const catname=useRef("");
  const catdesc=useRef("");
  const navigate=useNavigate();
  const fileName = "managecategorydata";

  // Call event Handeling function
  const AddCategoryData=()=>{
    var insert={
      catname:catname.current.value,
      catdesc:catdesc.current.value,
    }

    // call API/

    axios.post(`http://localhost:3000/Category`,insert).then(()=>{
      Swal.fire({
              title: "Thank you",
              text: "Your Appointment is booked successfully",
              icon: "success"
            });
      
            navigate('/admin-login/add-category');
      
            //   ak data store thai jai pachi form fari reset thai refresh thai
          e.target.reset();
    })
  } 

  // add data in database into manage category

  useEffect(()=>{
    axios.get(`http://localhost:3000/Category`).then((response)=>{
      setData(response.data);
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
    <div className=''>
    <h1 className='text-4xl text-yellow-800 ms-0'>Add Category <ExportToExcel apiData={catdata} fileName={fileName} /></h1>
    <hr className='border border-2 border-yellow-600 w-20' />

      <form onSubmit={AddCategoryData}>
        <div className='form-group mt-10'>
            <input type='text' ref={catname} placeholder='Enter Category Name *' className='form-control p-3 border border-2 border-yellow-600 w-116' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' ref={catdesc} placeholder='Category decsriptions *' className='form-control p-3 border border-2 border-yellow-600 w-116' />
        </div>

        
        <div className='form-group mt-5'>
            <input type='submit' value="Add Category" className='form-control p-3 bg-black text-white w-116' />
           
        </div>
        </form>

        <div className='w-full'>
     <table className='table-auto text-center w-full mt-10 border-1 border-separate border-spacing-[26px] table'>
        <tr>
            <th >CategoryName</th>
            <th>Descriptions</th>
            <th>Action</th>
        </tr>

        {catdata && catdata.map((item)=>{
          return(
            <>
            <tr className='text-center'>
            <td>{item.catname}</td>
            <td>{item.catdesc}</td>
            
            <td><button type='button' onClick={()=>navigate(`/admin-login/delete-category/${item.id}`)} className='bg-red-600 text-white p-3 mb-2 '><span className='bi bi-trash'></span></button>
            |

            <button type='button' onClick={()=>navigate(`/admin-login/edit-category/${item.id}`)} className='bg-blue-600 text-white p-3 mx-4'><span className='bi bi-pencil'></span></button>
            </td>
        </tr>

            </>
          )
        })}   
   
     </table>

        </div>
        </div>

    </div>

    </div>

    </>
  )
}