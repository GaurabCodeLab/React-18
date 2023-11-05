import React, {useContext} from "react";
import { LoginContext } from "../App";

function SinglePost(){
    const login = useContext(LoginContext);
    console.log(login);
    return <h3>Single Post {login}</h3>
}

export default SinglePost;