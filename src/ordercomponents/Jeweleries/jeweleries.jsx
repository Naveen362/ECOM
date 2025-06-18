import { useEffect, useState } from "react";
import jeweler from "../../services/jewelariess/jewels";
import axios from "axios";
import { Link } from "react-router-dom";
function Jeweleries(){
var [se,setse]=useState([])
useEffect(()=>{
    var x=jeweler().then((e)=>{console.log(e.data)
        setse(e.data)}).catch((e)=>{alert("NOT FOUND>")})
},[])

    return(
        <div className="jewelers m-4">
       <h1 className="text-center">Jewelers💍</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui voluptatem asperiores, reiciendis cum culpa dicta praesentium. Dolores reprehenderit explicabo voluptatem, nisi sapiente iste! Ad odit aliquid quidem laborum explicabo minima quos laboriosam esse ea, provident aliquam reprehenderit quae. At ipsum repudiandae voluptatem quam ipsam laboriosam similique animi ducimus velit sint laudantium sunt, placeat, explicabo excepturi harum voluptates aliquam sit vero expedita. Doloribus quam quas laborum. Quas non voluptatibus, labore atque impedit repellendus odio autem vel fuga natus vero reprehenderit quibusdam similique nobis eius dolorum fugit velit, totam assumenda aut blanditiis eum corrupti adipisci. Tenetur, deleniti, vero reprehenderit pariatur sunt maxime voluptas odio quod nesciunt velit repellat modi hic molestias tempora sequi. Hic repudiandae nulla omnis quam corrupti nemo laboriosam iusto quidem possimus doloribus natus asperiores, quae eveniet illum dolores voluptatibus ut quod inventore quos sapiente adipisci placeat. Culpa amet asperiores at odio sit, magni ut quisquam minima fugit qui?</p>
       
       
       <div  className="d-flex flex-wrap justify-content-evenly gap-2">
        {se.length>0 ?se.map((product)=>{
            return(
                <Jewelery product={product}/>
            )
        }):<h3 className="text-center">Loading  . . .</h3>}
       </div>
       
        </div>
    )
}
function Jewelery({product}){
   
    let {id,image,title,price,rating}=product
     return(
         <div className="card w-25 my-3">
        <div className="card-header">
         <img src={image} alt="welcome to clothes of indian30" width="100%" height={200}/>
        </div>
        <div className="card-body">
         <h6>{title}</h6>
         <p>Price :${price}</p>
         <p>Rating: @{rating.rate}</p>
         <Link to={`/productdetails/${id}`}>
          <button className="btn btn-primary mx-1">Product Details</button>
        </Link>
         <button onClick={()=>{
          
          axios.post("http://localhost:3000/addToCart",product).then((e)=>{alert("okay s")})
          .catch((e)=>{alert(e)})
          
        }} className="btn btn-warning mx-1">Add to Cart</button>
        </div>
 
 
 
         </div>
     )
 }
export default Jeweleries;

