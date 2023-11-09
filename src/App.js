import ChildContextProvider from "./context/childContextProvider";
import Child from "./child";

function App(){
  return (
    <>
    <h1>Hello Parent Component</h1>
    <ChildContextProvider>
    <Child/>
    </ChildContextProvider>
    </>
  )
}

export default App;