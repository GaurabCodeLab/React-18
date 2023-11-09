import { useState } from 'react';
import PrintNumber from './printNumber';

function App(){
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);
  const customCss = {
    backgroundColor : dark?"black":"white ",
    color : dark?"white":"black"
  }
  function changeNumber(){
    return number;
  }
  
  return (
    <>
    <h1 style={customCss}>Number value is : {number}</h1>
    <button onClick={()=>setNumber(number+1)}>Increase Number</button> <br/> <br/>
    <button onClick={()=>setDark(!dark)}>Toggle Me !!!</button>
    <PrintNumber changeNumber={changeNumber}/>
    </>
  )
}

export default App;
