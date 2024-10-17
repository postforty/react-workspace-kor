import useCounter from "./hooks/useCounter"

export default function Counter3() {
    const [count, increment, decrement, reset] = useCounter(100, 100)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}