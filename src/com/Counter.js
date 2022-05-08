import React, { useReducer } from "react";

function reducer(state, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default function Counter(){
    const [num,dispatch] = useReducer(reducer,0);

    const onInc = () =>{
        dispatch({type: 'INCREMENT'});
    }

    const onDec = () =>{
        dispatch({type: 'DECREMENT'});
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onInc}>+1</button>
            <button onClick={onDec}>-1</button>
        </div>
    );
}