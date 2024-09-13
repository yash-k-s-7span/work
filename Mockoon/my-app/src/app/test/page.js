"use client"

import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const [data,setData] = useState([]);
    const handleCall = async() => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/users/data`)
        console.log(response);
        if(response.status === 200){
            // console.log(response.data);
            setData(response.data)
            console.log(':::::',data)
        }
        else{
            console.log("Something went wrong");
        }
    }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
        <button style={{padding:"10px",backgroundColor:"blue",borderRadius:"30px",}} onClick={handleCall}>Test Api</button>
        {data.map((item,index) => {
            return(
                <div key={index} className='flex flex-col'>
                    <div className='grid grid-cols-2 my-5'>
                        <div>{item.id}</div>
                        <div>{item.age}</div>
                        <div>{item.name}</div>
                        <div>{item.number}</div>
                    </div>
                    
                </div>
            )
        })}
        
    </div>
  )
}

export default page