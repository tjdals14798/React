import React, { useState } from "react";

export default function Counter(){
    const [num,setNum] = useState(0);

    const onInc = () =>{
        setNum(prevNum => prevNum+1);
    }

    const onDec = () =>{
        setNum(prevNum => prevNum-1);
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onInc}>+1</button>
            <button onClick={onDec}>-1</button>
        </div>
    );
}