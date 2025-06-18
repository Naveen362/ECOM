import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

function Cart() {
    let [s,setState]=useState([])
    useEffect(()=>{
elements();


    },[])
    const elements=()=>{
        axios.get("http://localhost:3000/addToCart").then(
            (e)=>{setState(e.data)}
        ).catch((e)=>{alert("og")})
    }
    const compii=(id)=>{
  axios.delete(`http://localhost:3000/addToCart/${id}`).then(alert("REMOVED.....From CARTEDW"))
  elements()
    }
  return (
    <div>
       <h1>Cart Items</h1>
       {s.length>0?<div className="d-flex flex-wrap justify-content-evenly align-items-center gap-3 shadow w-100 border">
             {s.map((product)=>{
                return(<div className='border w-25'>
                   < CartItem product={product}/>
                   <button className="btn btn-danger w-100 px-2" onClick={()=>compii(product.id)} >Remove</button></div>
                )
             })}
            </div>:<h1>No ITEMS IN CART ED</h1>}
    </div>
  )
}

export default Cart;