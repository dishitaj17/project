import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeleteProduct() {

    const [item,setItem]=useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:3000/add-item/${id}`).then(()=>{
            // delete messages 
              Swal.fire({
                    title: "Congatulations!",
                    text: "Your data Deleted by admin successfully!",
                    icon: "error"
                  });
            navigate('/admin-login/add-product');
        });
  
    })  
  
    



  return (
    <div>
      
    </div>
  )
}
