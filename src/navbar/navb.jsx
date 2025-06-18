import "./navb.css"
import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <div className="nav">
       <header><h1 className="ha">Aadai🛍️</h1></header>
       <header className="d-flex justify-content-evenly w-50">
        {/* <a href="/">Home</a>
        <a href="/electronics">Electronics</a>
        <a href="/jeweleries">Jeweleres</a>
        <a href="/Mens">Mens</a>
        <a href="/Womens">Womens</a> */}
        <Link to="/">Home</Link>
        <Link to="/electronics">electronics</Link>
        <Link to="/jeweleries">Jeweleries</Link>
        <Link to="/Mens">Mens</Link>
        <Link to="/Womens">Womens</Link>
       </header>
       <header className="d-flex justify-content-evenly w-25">
        {/* <Link to="/Profiled"><i className="bi bi-arrow-up-right-square-fill"></i></Link> */}
        <Link to="/CartEmis"><i className="bi bi-heart"></i></Link>
        <a href="#">🔐</a>

       </header>
        </div>
    )
}