import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  let [state,setstate]=useState({})
  let { id } = useParams(); // {x:11}
  useEffect(()=>{axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
    console.log(res.data)
    setstate(res.data)
  }).catch((res)=>{alert("Try again later . . .")})
},[])
  return (
    <div className="mt-5 text-center text-secondary">
      <h2>Product Details :{id}</h2>
      <div className="container bg-light shadow">
        <div className="row">
          <div className="col-4 m-2 p-1"><img src={state.image} width={300}/></div>
          <div className="col m-2 p-1"><h1>{state.price}</h1><br/>
          <p>{state.title}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas, neque, labore aliquid mollitia officia ea error, ducimus consequuntur nihil saepe tempora quod placeat vero fuga nisi magnam unde inventore.
          Quas eligendi architecto pariatur, earum quam commodi explicabo deleniti vitae omnis ad dolore beatae corporis laborum illo ut, aspernatur officia officiis, iure dolorum a repellendus at. Quaerat pariatur sapiente nulla.
          Iure quaerat labore obcaecati, dicta exercitationem assumenda minima laudantium et fugiat, error, quisquam fugit ipsam dolor doloribus ullam vitae illum nihil ratione reiciendis du?</p>
          <hr/>
          <button onClick={()=>{
          
          axios.post("http://localhost:3000/addToCart",state).then((e)=>{alert("okay s")})
          .catch((e)=>{alert(e)})
          
        }} className="btn btn-danger mx-5">Add to Cart</button>
          <Link to=""><button className="btn btn-primary mx-5">Whislist</button></Link>

          
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default ProductDetails;