import './App.css';
import { useState} from 'react';
import PrintTable from './PrintTable';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  
  const cssStyle = {
    backgroundColor : dark? "black": "white",
    color : dark? "white" : "black"
  };

  // IN real world below function can be anything like calling API
  const calculateTable = ()=>{
    return [number*1, number*2, number*3, number*4, number*5];
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
