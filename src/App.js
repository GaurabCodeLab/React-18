import useFetch from "./customHooks/useFetch";

function App() {
  const response = useFetch("https://jsonplaceholder.typicode.com/users");
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
