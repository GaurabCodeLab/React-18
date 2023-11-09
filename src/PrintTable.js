import { useEffect, useState} from 'react';

function PrintNumber({changeNumber}){
    const [num, setNum] = useState(null);
    useEffect(()=>{
      setNum(changeNumber());
        console.log("function created");
    }, [changeNumber])
    return (
        <>
        <h1>Hello child component {num}</h1>
        </>
    )
}

export default PrintNumber;
