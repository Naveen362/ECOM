import axios from "axios";
export default function electronicgadjects(){
    var gadjects=axios.get("https://fakestoreapi.com/products/category/electronics")
    return gadjects;
}