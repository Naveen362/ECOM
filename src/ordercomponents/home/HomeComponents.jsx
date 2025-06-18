import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./home1.css"
const HomeComponents = ({product}) => {
    
    const { image, title, price, rating, id } = product;
  return (
    <div className='card  w-md-75 w-sm-100 w-lg-25 my-3 border-primary caa rounded-5' title={title}>
     <div className='card-header'>
        <img src={image} width="100%" height={200}/>
     </div>
     <div className='card-body'>
        <p>title:{title}</p>
        <p>price:Rs.{price}</p>
        <p>rating :#{rating.rate}</p>

        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-primary mx-1 ">Product Details</button>
        </Link>



        <button onClick={()=>{
          
          axios.post("http://localhost:3000/addToCart",product).then((e)=>{alert("okay s")})
          .catch((e)=>{alert(e)})
          
        }} className="btn btn-info mx-1">Add to Cart</button>
     </div>
    </div>
  )
}

export default HomeComponents ;