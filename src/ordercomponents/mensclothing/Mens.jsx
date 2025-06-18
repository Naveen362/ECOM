import { Link } from "react-router-dom";
import axios from "axios";

import React from 'react'

const Mens=({product})=>{
    const { image, title, price, rating, id } = product;
      return (
        <div className='card w-25 my-3' title={title}>
         <div className='card-header'>
            <img src={image} width="100%" height={200}/>
         </div>
         <div className='card-body'>
            <p>title:{title}</p>
            <p>price:Rs.{price}</p>
            <p>rating :#{rating.rate}</p>
    
            <Link to={`/productdetails/${id}`}>
              <button className="btn btn-primary mx-1 my-2">Product Details</button>
            </Link>
    
    
    
            <button onClick={()=>{
              
              axios.post("http://localhost:3000/addToCart",product).then((e)=>{alert("okay s")})
              .catch((e)=>{alert(e)})
              
            }} className="btn btn-info mx-1">Add to Cart</button>
         </div>
        </div>)
}
export default Mens;