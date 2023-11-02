import './App.css';
import { useRef } from 'react';

function App() {
  const ele = useRef(null);
  function handleSubmit(event){
    event.preventDefault();
    const inputEle = document.getElementsByClassName("inputEle");
    console.log(ele.current.value);
    console.log(inputEle[0].value);
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component React</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' ref={ele}/> <br/> <br/>
      <input type='text' className='inputEle'/>  <br/> <br/>
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
