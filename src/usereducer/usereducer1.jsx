import {useState,useReducer } from "react";

function Used() {

    let [a,setA]=useState([])
  const twofn = (state, action) => {
    return {
      ...state,
      [action.namer]: action.value,
    };
  };

  let [state, dispatch] = useReducer(twofn, { name: "" });

  function onefn(e) {
    dispatch({
      namer: e.target.name,
      value: e.target.value,
    });


  }
  function threefn(){
    setA([...a,state.name])
  }

  return (
    <>
      <input
        type="text"
        value={state.name} // Use state.name
        onChange={onefn}
        name="name" // Ensure the input's name matches the state property
        placeholder="qwerty"
      />
      <button onClick={threefn}>jai janasena</button>
      <h1>{state.name}</h1>
      <ul>
        {a.map((a,b)=>{
           return( <li>{b}:{a}</li>)
        })}
      </ul>
    </>
  );
}

export default Used;
