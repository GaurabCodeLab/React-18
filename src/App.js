import { useRef, useEffect} from 'react';

function App(){
  const ref = useRef(0);


  // by clicking button ref value is changing but useEffect hook is not calling
  useEffect(()=>{
    console.log("useEffect called");
  })

  function handleClick(){
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <>
    <h1>Hello parent component</h1>
    <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App;

