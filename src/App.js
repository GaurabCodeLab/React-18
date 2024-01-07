import { useReducer} from 'react';


const initialState = {count : 0};

const reducer = (state, action)=>{
  switch(action.type){
    case "increment" :
      return {count : state.count + 1};
      case "decrement" :
        return {count : state.count - 1};
        default :
        return state
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  function increaseCount(){
    dispatch({type : "increment"})
  }

  function decreaseCount(){
    dispatch({type : "decrement"})
  }

  return (
    <>
    <h1>Count is : {state.count}</h1>
    <button onClick={increaseCount} className='mx-3'>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    </>
  )

}

export default App;
