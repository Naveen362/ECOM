import { useState, useReducer } from "react";

export default function Userreduce() {
  // useState for managing simple state 'a'
  let [a, setA] = useState(0);

  // Reducer function
  const funce = (state, action) => {
    if (action.type=="incrn"){
        return state+1;
    }
  };

  // Initializing useReducer with reducer function and initial state
  let [state, dispatch] = useReducer(funce, 0);

  // Functions for managing state 'a'
  const incrementA = () => {
    setA(a + 1);
  };
  const resetA = () => {
    setA(0);
  };
  const decrementA = () => {
    setA(a - 1);
  };

  return (
    <div>
      <h1>state a: {a} | state: {state}</h1>
      <button onClick={incrementA}>Increment A</button>
      <button onClick={decrementA}>Decrement A</button>
      <button onClick={resetA}>Reset A</button>
      <button onClick={() => dispatch({ type: "incrn", payload: 1 })}>
        Increment State
      </button>
    </div>
  );
}
