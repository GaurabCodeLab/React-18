import React, {createContext} from "react";
import MainComponent from "./components/MainComponent";

export const LoginContext = createContext();
function App(){
  return (
    <LoginContext.Provider value={"ram"}>
      <div>
        <MainComponent/>
      </div>
    </LoginContext.Provider>
  )
}

export default App;