import { useState, useEffect} from 'react';

function useFetch(url){
    const [response, setResponse] = useState([]);
    useEffect(()=>{
   fetch(url)
   .then((result)=>result.json())
   .then((response)=>setResponse(response))
    }, []);
    
    return response;
}

export default useFetch;

