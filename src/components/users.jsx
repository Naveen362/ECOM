import React from "react";
import {getUsers} from "./Userservice"
import {useState} from "react"
import User from "./user"

function Users(){
    let [usery,setuser]=useState([])
const sendRequest=()=>{
    var userspromiseObject=getUsers();

    userspromiseObject.then((users)=>{
        setuser(users.data.results)
        console.log(users.data.results);
    }).catch((erro)=>{
        // console.log(erro)
        alert("ouoo")
    })
}


    return(

        <div className="users">
            <div>
            <h1>Users Information</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero?</p>
            <button onClick={sendRequest}>GetUsers</button>
        </div>
        <div>
         { usery.map((userw,index)=>{
            return (
                <div className="mapper">

                    <User user={userw}/>
                </div>
            )
         })
            }
        </div>
        </div>
    )
}
export default Users;