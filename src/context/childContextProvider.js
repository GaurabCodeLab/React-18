import { createContext, useState} from 'react';

export const childContext = createContext();

function ChildContextProvider({children}){
   const [data, setData] = useState("ram");

   return (
     <>
     |<childContext.Provider value={data}>
        {children}
     </childContext.Provider>
     <button onClick={()=>setData("sita")}>Click Me !!!</button>
     </>
   )
}

export default ChildContextProvider;