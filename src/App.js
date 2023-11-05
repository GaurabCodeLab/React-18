import { useState, useEffect, useLayoutEffect, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  // it happens after printing DOM
  // useEffect(() => {
  //   if (textRef.current != null) {
  //     const dimension = textRef.current.getBoundingClientRect();
  //     textRef.current.style.paddingTop = `${dimension.height}px`;
  //   }
  // }, [toggle]);

  // it happens before printing DOM
  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toggle]);

  // Example to show that useLayoutEffect hook will run first
  // useEffect(()=>{
  //   console.log("useEffect called");
  // }, [toggle])

  // useLayoutEffect(()=>{
  //   console.log("useLayoutEffect called");
  // }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1 ref={textRef}>Hello World</h1>}
    </>
  );
}

export default App;
