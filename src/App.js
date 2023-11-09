import { useState, useMemo } from 'react';


function changeNumber(num){
   for(let i=0; i<100000; i++){};
   console.log("expensive function called");
   return num;
}

function App(){
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);
  const expensiveNumber = useMemo(()=>{
    return changeNumber(number);
  }, [number])
  const customCss = {
    backgroundColor : dark?"black":"white ",
    color : dark?"white":"black"
  }
  return (
    <>
    <h1 style={customCss}>Number value is : {expensiveNumber}</h1>
    <button onClick={()=>setNumber(number+1)}>Increase Number</button> <br/> <br/>
    <button onClick={()=>setDark(!dark)}>Toggle Me !!!</button>
    </>
  )
}

export default App;
