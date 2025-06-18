import './App.css';
import Users1 from "./components1/users1";
import Users from "./components/users";
import Userreduce from "./usereducer/usereducer";
import Used from './usereducer/usereducer1';
import Counter from './useEffect/useEffect';
import Components3 from './componenets3/users3';
import SliderEffect from './useEffect/useeffect1';
import Electronics from './ordercomponents/electronics/electronics';
import Jeweleries from './ordercomponents/Jeweleries/jeweleries';
import Mensclothing from './ordercomponents/mensclothing/mensclothing';
import Womensclothing from './ordercomponents/womensclothing/womensclothing';
import Home from './ordercomponents/home/home';
import Navbar from './navbar/navb';
import ProductDetails from './ordercomponents/productdetails';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profiled, { One, Three, Two } from './ordercomponents/profiled';
import Cart from './ordercomponents/addtocart/cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jeweleries" element={<Jeweleries />} />
        <Route path="/Mens" element={<Mensclothing />} />
        <Route path="/Womens" element={<Womensclothing />} />
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<Home/>}/>
        {/* <Route path="/Profiled" element={<Profiled/>}> */}
        {/* <Route path="" element={<Navigate to={"two"}></Navigate>} />
        <Route path="one" element={<One/>}/>
        <Route path="two" element={<Two/>}/>
        <Route path="three" element={<Three/>}/>
  
        
        
        </Route> */}
        <Route path="CartEmis" element={<Cart/>}/>
      </Routes>
      
        {/* <Users/>
      <Users1/>
      <Userreduce/>
      <Used/>
      <Counter/>
      <Components3/>
      <SliderEffect/>
      <Electronics/>
      <Jeweleries/>
      <Mensclothing/>
      <Womensclothing/> */}
    </div>
  );
}

export default App;
