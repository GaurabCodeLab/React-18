import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const calculation = expensiveFunction(number);
  const cssStyle = {
    backgroundColor : dark? "black": "white",
    color : dark? "white" : "black"
  };
  return(
    <div style={cssStyle}>
      <input type='number' value={number} onChange={(event)=>setNumber(event.target.valueAsNumber)}/>
      <h2>Calculation : {calculation}</h2>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunction(num){
   console.log("loop started");
   for(let i=0; i<100000000; i++){}
   return num;
}

export default App;
