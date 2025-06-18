import axios from "axios";
function servicefn(){
    var x=axios.get("https://randomuser.me/api/?results=8");
    return x;
}
export default servicefn;