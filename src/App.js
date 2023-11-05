import './App.css';
import { useState, useCallback} from 'react';
import PrintTable from './PrintTable';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // second way to use useCallback hook
  const calculateTable = useCallback((value)=>{
    const newNumber = number + value;
    return [newNumber*1, newNumber*2, newNumber*3, newNumber*4]
  }, [number])
    // First way to use useCallback hook
  // const calculateTable = useCallback(()=>{
  //   return [number*1, number*2, number*3, number*4, number*5];
  // }, [number])
  
  const cssStyle = {
    backgroundColor : dark? "black": "white",
    color : dark? "white" : "black"
  };

  return(
    <div style={cssStyle}>
      <input type='number' value={number} onChange={(event)=>setNumber(event.target.valueAsNumber)}/>
      <PrintTable calculateTable={calculateTable} />
      <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

export default App;
