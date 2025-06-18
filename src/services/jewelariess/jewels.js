import axios from "axios";

export default function jeweler(){
    var jewes=axios.get("https://fakestoreapi.com/products/category/jewelery");
    return jewes;
}