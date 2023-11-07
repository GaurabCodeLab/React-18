import { useEffect, useLayoutEffect, useRef} from 'react';

function App(){
  const ele = useRef();

// pahle useLayoutEffect call hota hai uske baad useEffect call hota hai

  // useEffect(()=>{
  //   console.log("useEffect called");
  //   const dimension = ele.current.getBoundingClientRect();
  //   ele.current.style.paddingTop = `${dimension.height}px`;
  // },[])

  useLayoutEffect(()=>{
    console.log("useLayoutEffect called");
    const dimension = ele.current.getBoundingClientRect();
    ele.current.style.paddingTop = `${dimension.height}px`;
  },[])
  return(
    <>
    <h1>Hello Parent component</h1>
    <p ref={ele}>isme padding dena hai</p>
    </>
  )
}

export default App;
