import { useState, useEffect} from 'react';

function App() {
const [response, setResponse] = useState([]);
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((result)=>result.json())
  .then((response)=>setResponse(response)
  )

}, [])
  
return (
  <>
  {
    response.map((value, index)=>{
   return <h3 key={index}>{value.id} : {value.name}</h3>
    })
  }
  </>
)
}
export default App;
