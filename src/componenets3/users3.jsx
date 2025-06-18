import { useState } from "react";
import geteroffun from "./services3"; // Import the API function
import User3 from "./user3"; // Assuming User3 is a component to display the user

export default function Components3() {
  const [s, sets] = useState([]); // State to hold fetched data

  function sendre() {
    async function n1() {
      try {
        const sc = await geteroffun(); // Call the API function
        sets(sc.data.results); // Assuming the data is in sc.data.results
      } catch (err) {
        alert("Error fetching data");
      }
    }
    n1(); // Invoke the async function to fetch data
  }

  return (
    <>
      <button onClick={sendre}>Onclick</button>
      <div>
        {
          s.map((obj, index) => (
            <User3 key={index} obj1={obj} /> // Rendering User3 component for each object
          ))
        }
      </div>
    </>
  );
}
