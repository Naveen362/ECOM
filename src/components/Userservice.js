
import axios from "axios";



export function getUsers(){


    var userspromiseObject=axios.get("https://randomuser.me/api/?results=1");
    
    return userspromiseObject;

}

