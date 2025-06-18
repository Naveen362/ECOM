import axios from "axios";


export default function menclothong(){
    let e=axios.get("http://localhost:3000/categories_mensclothing")
    return e;
}