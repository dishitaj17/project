import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

export default function Dashboard() {

  // count total contact manage

  const[contactdata,setData]=useState();

  useEffect(()=>{
    axios.get(`http://localhost:3000/Contact`).then((response)=>{
      setData(response.data);

    });

  },[]);
 
  // chart

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

    
return (

    <div className='w-full p-2'>
   <h1 className='text-4xl text-yellow-800 font-extrabold ms-5 py-5 decoration-solid underline'>Rochie Chocolates Dashboard</h1> 
    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-blue-300 mt-7 m-5'>
        <h1 className='text-2xl mx-3 text-center text-white'>Manage Products <span className='bi bi-person'></span></h1>
     </div>
     <div className='w-full p-3 bg-blue-700 mt-7 m-5'>
     <h1 className='text-2xl mx-3 text-center text-white'>Total contact <span className='bi bi-person'><Link to={"/admin-login/admin-contact"}> <span className='rounded-full text-lg  text-white bg-black p-2'></span></Link></span></h1>
     </div>
     <div className='w-full p-3 bg-blue-300 mt-7 m-5'>
     <h1 className='text-2xl mx-3 text-center text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>

    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-blue-700 mt-7 m-5'>
     <h1 className='text-2xl mx-3 text-center text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-blue-300 mt-7 m-5'>
     <h1 className='text-2xl mx-3 text-center text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3  bg-blue-700 mt-7 m-5'>
     <h1 className='text-2xl mx-3 text-center text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>

    
    {/* <Chart chartType="ColumnChart" width="100%" height="100%" data={data} /> */}

    <h1 className='text-4xl text-pink-700 font-extrabold ms-5 py-5 decoration-solid underline'>Progress Chart</h1> 

    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />


    </div>
  )
}