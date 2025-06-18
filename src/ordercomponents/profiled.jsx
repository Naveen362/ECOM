import React from "react";
import { Link, Outlet } from "react-router-dom";




export default function Profiled(){


    return(
        <div className="container-fluid d-flex">
        <div className="container bg-secondary d-flex justify-content-evenly">
            <Link to="one"><h1>ONE</h1></Link>
            <Link to="two"><h1>TWO</h1></Link>
            <Link to="three"><h1>THREE</h1></Link>
        </div>
        <div className="container-fluid bg-danger">
           <Outlet/></div>
        </div>
    )
}
export function One(){
    return(
        <div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad autem sunt, architecto minima modi nisi pariatur atque fugiat perferendis aliquid quo cumque aspernatur neque commodi. Reiciendis illo tempore iure placeat maiores porro sit velit ea quam quidem cupiditate sequi voluptate, voluptatem eum quaerat a obcaecati, consequuntur, autem quis optio eligendi laborum culpa quas? Nisi voluptate provident doloribus et illum voluptas unde earum. Odio atque reprehenderit earum placeat facere et iste eum? Est voluptate porro fuga sit quas praesentium quia! Laudantium dicta neque architecto expedita blanditiis similique excepturi rerum quidem. Porro dolor cum consectetur tempore, tenetur ut quaerat, natus, cumque tempora unde a dolore qui vero saepe harum possimus voluptatum ipsum alias ipsam reiciendis. Natus rem ad veniam voluptas incidunt asperiores blanditiis unde odit deserunt. Officiis, earum iusto reiciendis at atque facere explicabo laboriosam? Similique in mollitia possimus quos optio sit ad ipsa rem, culpa facere veniam delectus beatae aperiam minus, sequi quo hic nesciunt sapiente libero deleniti incidunt consectetur animi modi debitis! Dolore cupiditate, in debitis placeat qui illum voluptates ipsa quas dolorem accusamus! Possimus repellendus praesentium, pariatur aperiam nostrum laborum soluta fugiat dicta consectetur, vitae accusamus animi quis quidem ratione odio iure ipsum, perferendis natus velit inventore? Iure, veritatis?</p>
        </div>
    )
}
export function Two(){
    return(
        <div>

            <p>ipsum dolor sit amet consectetur adipisicing elit. Ad autem sunt, architecto minima modi nisi pariatur atque fugiat perferendis aliquid quo cumque aspernatur neque commodi. Reiciendis illo tempore iure placeat maiores porro sit velit ea quam quidem cupiditate sequi voluptate, voluptatem eum quaerat a obcaecati, consequuntur, autem quis optio eligendi laborum culpa quas? Nisi voluptate provident doloribus et illum voluptas unde earum. Odio atque reprehenderit earum placeat facere et iste eum? Est voluptate porro fuga sit quas praesentium quia! Laudantium dicta neque architecto expedita blanditiis similique excepturi rerum quidem. Porro dolor cum consectetur tempore, tenetur ut quaerat, natus, cumque tempora unde a dolore qui vero saepe harum possimus voluptatum ipsum alias ipsam reiciendis. Natus rem ad veniam voluptas incidunt asperiores blanditiis unde odit deserunt. Officiis, earum iusto reiciendis at atque facere explicabo laboriosam? Similique in mollitia possimus quos optio sit ad ipsa rem, culpa facere veniam delectus beatae aperiam minus, sequi quo hic nesciunt sapiente libero deleniti incidunt consectetur animi modi debitis! Dolore cupiditate, in debitis placeat qui illum voluptates ipsa quas dolorem accusamus! Possimus repellendus praesentium, pariatur aperiam nostrum laborum soluta fugiat dicta consectetur, vitae accusamus animi quis quidem ratione odio iure ipsum, perferendis natus velit inventore? Iure, veritatis?</p>
        </div>
    )
}
export function Three(){
    return(
        <div>

            <p> sit amet consectetur adipisicing elit. Ad autem sunt, architecto minima modi nisi pariatur atque fugiat perferendis aliquid quo cumque aspernatur neque commodi. Reiciendis illo tempore iure placeat maiores porro sit velit ea quam quidem cupiditate sequi voluptate, voluptatem eum quaerat a obcaecati, consequuntur, autem quis optio eligendi laborum culpa quas? Nisi voluptate provident doloribus et illum voluptas unde earum. Odio atque reprehenderit earum placeat facere et iste eum? Est voluptate porro fuga sit quas praesentium quia! Laudantium dicta neque architecto expedita blanditiis similique excepturi rerum quidem. Porro dolor cum consectetur tempore, tenetur ut quaerat, natus, cumque tempora unde a dolore qui vero saepe harum possimus voluptatum ipsum alias ipsam reiciendis. Natus rem ad veniam voluptas incidunt asperiores blanditiis unde odit deserunt. Officiis, earum iusto reiciendis at atque facere explicabo laboriosam? Similique in mollitia possimus quos optio sit ad ipsa rem, culpa facere veniam delectus beatae aperiam minus, sequi quo hic nesciunt sapiente libero deleniti incidunt consectetur animi modi debitis! Dolore cupiditate, in debitis placeat qui illum voluptates ipsa quas dolorem accusamus! Possimus repellendus praesentium, pariatur aperiam nostrum laborum soluta fugiat dicta consectetur, vitae accusamus animi quis quidem ratione odio iure ipsum, perferendis natus velit inventore? Iure, veritatis?</p>
        </div>
    )
}