import { useState,useEffect } from "react";
import electronicgadjects from "../../services/electronigadgets/electronicgadjects";
import Electronic from "./electronic";

export default function Electronics(){
    const [electronicItems,setelectronicsItems]=useState([])
    useEffect(()=>{
      var getelectronicsdata= electronicgadjects().then((s)=>{
            console.log(s.data);
            setelectronicsItems(s.data);
    
          }).catch((e)=>{alert("nOT 404")});
        },[])
  
    // const onefn=()=>{
    //   var getelectronicsdata= electronicgadjects().then((s)=>{
    //     console.log(s.data);
    //     setelectronicsItems(s.data);

    //   }).catch((e)=>{alert("nOT 404")});
    // }
    
    return(
        <div className="electronics m-4" style={{textAlign:"center"}}>

            <h1>Electronics🖥️</h1>
            {/* <img src="" width={"94%"} height="400"/> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis rerum iusto doloribus tempora ipsam perspiciatis, molestiae, expedita voluptatibus odio recusandae consectetur veniam minima nihil sequi dolorem? In adipisci laboriosam explicabo excepturi reprehenderit qui esse ratione dolorem molestiae eum dolor assumenda porro necessitatibus, consectetur sint est facere, fugiat quo nihil at distinctio totam iure! Maxime, aperiam aspernatur enim eligendi inventore beatae laudantium nam quos similique quasi itaque! Obcaecati similique amet ea! Deserunt, laboriosam repellendus nam asperiores eveniet eligendi facere itaque quo ipsam vero voluptatum ratione corporis eum quas ab earum nihil? Aliquam quaerat provident nemo tempora laudantium sed, enim totam eos quo at earum incidunt. Vero nihil laudantium accusamus illum eaque vitae error tenetur. Doloremque, cupiditate voluptatum possimus ut perspiciatis voluptates recusandae cumque nulla quasi illum, quod ratione velit obcaecati facere, quis officia veniam eos fuga molestias nam et adipisci natus maxime! Corporis nulla, ut maiores et deserunt provident delectus?</p>
            {/* <button onClick={onefn}>Sent</button> */}
          {electronicItems.length > 0 ?(
            <div className="d-flex flex-wrap justify-content-evenly gap-3">
             {electronicItems.map((product)=>{
                return(
                   < Electronic product={product}/>
                )
             })}
            </div>
          ):(<h2 className="text-center">Loading . . .</h2>)
          }
        
        </div>
    )
}