import { useCallback, useState } from "react";

export default function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }, [])

    const reset = useCallback(() => setForm(initialForm), [initialForm])

    return [form, onChange, reset];
}