import { useEffect, useState } from "react";
import menclothong from "../../services/menclothing/menclothing";
import axios from "axios";
import Mens from "./Mens";


export default function Mensclothing(){
    const [data,setData]=useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res)=>setData(res.data)).catch((err)=>alert("data not fetched"))
},[])
return(
    <div className="jewelers m-4">
        <h1 className="text-center">
            MensClothes👔
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos, temporibus id qui amet ad expedita, cupiditate ab ipsum voluptate corrupti error enim? Pariatur accusamus, ex recusandae autem nobis officia.
        Velit hic id maiores ipsa dolores animi facilis cum magnam, debitis harum modi asperiores, qui nostrum impedit pariatur vel sit placeat? Sint odit rerum quibusdam deleniti molestiae veritatis laborum libero?
        Fuga deleniti aspernatur, sint vitae id pariatur, fugit vel, optio ipsum corporis cupiditate eligendi ut nulla totam debitis ipsa enim possimus ducimus iste adipisci accusamus ex tempore nihil. Recusandae, dolores.
        </p>
        {data.length>0?<div className='d-flex flex-wrap gap-3 p-1 justify-content-evenly'>
            {data.map((data,index)=>{
        return(
          
            <Mens product={data}/>
            
        )
      })}
        </div>:<h3 className="text-center">Loading  . . .</h3>}
    </div>
)

}