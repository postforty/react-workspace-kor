import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
    // setTheme(theme === "light" ? "dark" : "light")
  }

  console.log(theme);

  return (
    <div>
      <h1>Props-based Theme Example</h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Content theme={theme} />
    </div>
  );
}


function ThemeToggle({ toggleTheme, theme }) {
  return (
    <button onClick={toggleTheme}>{theme}</button>
  )
}

function Content({theme}) {
  return (
    <>
      <p>현재 테마: {theme}</p>
      <Box theme={theme} />
    </>
  )
}

function Box({theme}) {
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