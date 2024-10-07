export default function Box({ theme }) {
    return (
        <div style={{
            padding: "20px",
            backgroundColor: theme === "dark" ? "#000" : "#fff",
            color: theme === "dark" ? "#fff" : "#000",
            height: "200px",
            border: "1px solid #000"
        }}>상자의 테마는 {theme}</div>
    )
}