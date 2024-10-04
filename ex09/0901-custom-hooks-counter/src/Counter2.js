import useCounter from "./hooks/useCounter"

export default function Counter2() {
    const [count, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}