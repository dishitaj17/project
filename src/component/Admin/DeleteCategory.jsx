import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteCategory() {

  const[data,setData]=useState([]);
  
  const{id}=useParams();
  const navigate=useNavigate();
  
  //delete data call api 
  useEffect(()=>{
      axios.delete(`http://localhost:3000/Category/${id}`).then(()=>{
          // delete messages 
            Swal.fire({
                  title: "Congatulations!",
                  text: "Your  data Deleted by admin successfully!",
                  icon: "error"
                });
          navigate('/admin-login/add-category');
      });

  })  


  return (
    <div>

    </div>
  )
}
