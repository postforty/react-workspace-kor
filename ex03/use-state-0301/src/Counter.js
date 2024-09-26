import React, { useState } from 'react'

function Counter() {

    // let number = 10;
    const [number, setNumber] = useState(10);

    function onIncrease() {
        // number += 1;
        // setNumber(number + 1)
        setNumber((prev) => prev + 1)
        console.log(number);
    }

    const onDecrease = () => setNumber(number - 1);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter