import React from "react";




export default function User({ user }){


    return(
        <div classname="User">
          <img src={user.picture.medium} width={"30%"} height={300}/>
          <h3>{user.name.title}"{user.name.first}</h3>
          <p><b>{user.gender}</b></p>
        </div>
    )
}