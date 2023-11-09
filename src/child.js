import { childContext } from "./context/childContextProvider";
import { useContext} from 'react';

function Child(){
    const data = useContext(childContext);
    return (
        <>
        <h1>Hello Child Component, data is {data}</h1>
        </>
    )
}

export default Child;