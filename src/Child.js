import { dataContext } from "./App";
import {useContext} from 'react';

function Child(){
    const data = useContext(dataContext);
    return (
        <>
        <h1>Hello child component, data is {data}</h1>
        </>
    )
}

export default Child;
