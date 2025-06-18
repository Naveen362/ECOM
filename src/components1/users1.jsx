import { useState } from "react";
import React from "react";
import servicefn from "./services2";
import "./users1.css"


function User1(){
let [user01,setuser1]=useState([])

    function getUserw(){
        let serviceelement=servicefn();
        serviceelement.then((elem)=>{setuser1(elem.data.results)}
        ).catch((err)=>{alert("error")})
    }    return (
        <div className="user1">
            <button onClick={getUserw}>GetUsers1</button>
            <br/>
         { user01.map((user10,index)=>{
            return(
                < div className={`Navee${index}`} key={index}>
            <img src={user10.picture.medium} alt="nothind to get worry" />
            <h1>{index}</h1>     
        </div>
        )
            })}
        </div>
    )
}
export default User1;