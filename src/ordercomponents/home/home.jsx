import axios from 'axios'
import React, { useEffect, useState } from 'react';
import "./home.css"
import HomeComponents from './HomeComponents'

function Home() {
    const [data,setData]=useState([])
 useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>{setData(res.data)}).catch(()=>{})
 })
 
    return (
    <div className="container-fluid mt-4 rounded-3 shadow-lg ">
    <h1 className='fst-italic text-center my-5'>Welcome to E-Commerce🛒 Website</h1>
        {data.length>0?
        <div className='d-flex naveen flex-wrap justify-content-evenly rounded-5 gap-3'>
      {data.map((data,index)=>{
        return(
          
            <HomeComponents product={data}/>
            
        )
      })}</div>:<h3 className="m-5 text-center">Loading . . .</h3>}
        
    </div>
  )
}

export default Home ;