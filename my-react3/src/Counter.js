import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }
    const deleteCount = () => {
        setCount(count - 1);
    }
    return (
        <>
            <button onClick={addCount}>Add</button>
            <button onClick={deleteCount}>Delete</button>
            <p>The Count is {count}</p>
        </>
    )
}

export default Counter;