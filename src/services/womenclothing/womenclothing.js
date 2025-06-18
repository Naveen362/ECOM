import axios from "axios";


export default function womenclothing(){
    var xcc=axios.get("https://fakestoreapi.com/products/category/women's clothing");
    return xcc;
}