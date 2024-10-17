import Box from "./Box";

export default function Content({ theme }) {
    return (
        <>
            <p>현재 테마: {theme}</p>
            <Box theme={theme} />
        </>
    )
}