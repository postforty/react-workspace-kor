import React, { useCallback, useEffect, useState } from 'react'

function UseCallbackExample() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    // const someFunction = () => {
    //     console.log(`someFunction!`)
    //     return;
    // }

    const someFunction = useCallback(() => {
        console.log(`someFunction의 number: ${number}`)
        return;
    }, [number])

    useEffect(() => {
        console.log("useEffect 안에 있는 코드 실행!")
    }, [someFunction]);

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => someFunction()}>someFunction 호출</button>
            <button onClick={() => setToggle(!toggle)}>Toggle 클릭</button>
            <span>{String(toggle)}</span>
        </div>
    )
}

export default UseCallbackExample