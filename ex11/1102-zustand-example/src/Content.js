import Box from "./Box";
import useStore from "./hooks/useStore";

export default function Content() {
    const { theme } = useStore();

    return (
        <>
            <p>현재 테마: {theme}</p><Box />
        </>
    )
}