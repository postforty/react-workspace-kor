import { useState } from "react";

export default function useCounter(initialValue, step = 1) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const reset = () => setCount(initialValue);

    return [count, increment, decrement, reset];
}