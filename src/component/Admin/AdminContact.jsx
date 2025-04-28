import React, {useState,useEffect} from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ExportToExcel } from './ExportToExcel';

export default function AdminContact() {

  // count total contact manage

  const [contactdata,setData]=useState("");
  const navigate=useNavigate();
  const fileName = "managecontactdata";

  // Apply useEffect

  useEffect(()=>{
      axios.get(`http://localhost:3000/Contact`).then((response)=>{
        setData(response.data);
      })
  },[]);

    
return (
    <div>
    <AdminHeader />
    
         <div className='flex flex-row'>
          {/* sidebar */}
          <div className='w-1/3 h-full'>
            <AdminSidebar />
          </div>
    
         
    <div className='w-full p-2'>
   <h1 className='text-3xl text-yellow-800 font-bold ms-5 py-5 decoration-solid underline'>Manage Contacts <ExportToExcel apiData={contactdata} fileName={fileName} /></h1> 

   
   <table className='text-center w-full mt-10 table table-auto space-x-10 gap-5 border-collapse border border-gray-400 p-5'>

        <tr>
            <th className='border border-gray-300 '>Name</th>
            <th className='border border-gray-300 '>Email</th>
            <th className='border border-gray-300 '>Phone</th>
            <th className='border border-gray-300 '>Subject</th>
            <th className='border border-gray-300 '>Comment</th>
            <th className='border border-gray-300 '>Action</th>
        </tr>

        {contactdata && contactdata.map((item)=>{
          return(
              <>
              <tr className='text-center border border-gray-300 '>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.subject}</td>
                <td>{item.comment}</td>


        <td>
                <button type='button' onClick={()=>navigate(`/admin-login/delete-contact/${item.id}`)} className='bg-red-600 text-white p-3 mb-2 mt-4'><span className='bi bi-trash'></span></button>

                <button type='button'className='bg-blue-600 text-white p-3 mx-4'><span className='bi bi-pencil'></span></button>
    </td>
              </tr>
              </>

          )
        })}
        
     </table>
    
    </div>
    </div>
    </div>
  )
}