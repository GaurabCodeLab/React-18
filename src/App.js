import './App.css';
import { useState} from 'react';

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="App">
      <h1>Controlled Component React</h1>
      <input type='text' value={value} onChange={(event)=>setValue(event.target.value)}/>
      <h3>{value}</h3>
    </div>
  );
}

export default App;
