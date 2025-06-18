import axios from "axios";

export default function geteroffun() {
   var xw=axios.get("https://randomuser.me/api/?results=1");
   return xw;
}
