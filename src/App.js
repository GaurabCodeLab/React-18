import Child from "./Child";
import { useState} from 'react';

function App(){
  const [data, setData] = useState(null);

  function Ram(value){
     setData(value);
  }
  
  return(
    <>
    <h1>hello parent component {data}</h1>
    <Child data={Ram}/>
    </>
  )
}

export default App;

