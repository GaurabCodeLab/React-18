import Child from "./Child";
import { useState, createContext } from "react";

export const dataContext = createContext();
function App(){
  const [data, setData] = useState("ram");
  return (
    <>
    <h1>Hello Parent Component</h1>
    <dataContext.Provider value={data}>
     <Child/>
    </dataContext.Provider>
    <button onClick={()=>setData("sita")}>Click Me !!!</button>
    </>
  )
}

export default App;
