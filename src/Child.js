function Child(props){
    const value = "sita";
    
    function handleClick(){
        const func = props.data;
        func("lakshman");
    }
     
    return(
        <>
        <h1>Hello Child Component</h1>
        <button onClick={handleClick}>Click Me !!!</button>
        </>
    )
}

export default Child;
