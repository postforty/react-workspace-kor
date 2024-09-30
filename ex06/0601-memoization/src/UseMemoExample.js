import React, { useMemo, useState } from 'react'

// 함수형 컴포넌트
// - props, state 값 변경시 re-rendering
function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [bigArray] = useState(() => Array.from({ length: 10000 }, (_, i) => i + 1))

    const [toggle, setToggle] = useState(true)

    // const sum = () => {
    //     console.log("bigArray 연산하기...")
    //     return bigArray.reduce((acc, curr) => acc + curr)
    // }

    // useMemo는 값을 memoized 함
    const sum = useMemo(() => {
        console.log("bigArray 연산하기...")
        return bigArray.reduce((acc, curr) => acc + curr) // memoized
    }, [toggle])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count +</button>
            <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
            <p>bigArray 총합: {sum}</p>
            <p>{String(toggle)}</p>
        </div>
    )
}

export default UseMemoExample