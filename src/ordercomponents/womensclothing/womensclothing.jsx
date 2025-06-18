import { useEffect, useState } from "react"
import womenclothing from "../../services/womenclothing/womenclothing"
import Women from "./women"

export default function Womensclothing(){
    let [state,setState]=useState([])
   useEffect(()=>{ 
    
        var xc=womenclothing().then((e)=>{

            setState(e.data)
            console.log(e.data)}).catch((e)=>{console.log("error")})
    }
,[])
// useEffect(()=>{
//     var getelectronicsdata= electronicgadjects().then((s)=>{
//           console.log(s.data);
//           setelectronicsItems(s.data);
  
//         }).catch((e)=>{alert("nOT 404")});
//       },[])
     
return(
    <div className="womensclothing m-4">
    <h1 className="text-center">WomensClothing👗</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et quibusdam animi ad, ut, nesciunt molestias nostrum numquam, doloribus repellat reprehenderit magnam! Optio, voluptas quas. Ipsam odio similique at dignissimos explicabo non provident vel veniam numquam. Aspernatur rerum veritatis vitae ab! Autem maiores aspernatur dicta corporis delectus rem possimus quas deserunt est incidunt. Dolorum consequatur facere blanditiis corrupti, corporis illum minima pariatur beatae cumque, cum temporibus impedit quae, laboriosam aspernatur rem? Commodi dolorem odio eum cupiditate vel architecto ex quos dicta consequuntur aperiam praesentium eveniet magnam, voluptatibus sequi a nihil ea nemo ducimus quod possimus quibusdam, suscipit laudantium eaque. Doloribus quasi, praesentium, pariatur quidem non excepturi rerum adipisci vero consequuntur vitae eum consectetur soluta commodi quo quibusdam sapiente ex repellendus autem. Illo sed molestias explicabo id ex. Nam natus cumque ad quaerat et odit blanditiis, officiis quisquam eius distinctio itaque cum mollitia veritatis nihil possimus quo, id inventore dicta. Deserunt, porro quis. Voluptatibus totam eius non quisquam ducimus fugiat illum, sunt iste ad provident soluta repellat dignissimos, beatae nostrum, necessitatibus modi doloremque. Reprehenderit ratione pariatur a enim dicta? Quibusdam eius debitis illo consectetur? Vitae possimus nesciunt corrupti velit quas voluptatum incidunt labore eum deserunt adipisci nemo fuga, odio harum minima.</p>
    {/* <button onClick={womencloth}>WomensClothes</button> */}
    {state.length>0?
    <div className="d-flex flex-wrap justify-content-evenly gap-2">
        {
            state.map((element)=>{
                return(
                    
                        <Women product={element}/>
                    
                )
            })
        }
    </div>:<div><h3 className="text-center">Loading  . . .</h3></div>


    }
    
    
    
    
    </div>
)
}