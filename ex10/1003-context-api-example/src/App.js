import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
    // setTheme(theme === "light" ? "dark" : "light")
  }

  console.log(theme);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div>
        <h1>Props-based Theme Example</h1>
        <ThemeToggle />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>{theme}</button>
  )
}

function Content() {
  const {theme} = useContext(ThemeContext);

  console.log("theme>>>", theme)
  return (
    <>
      <p>현재 테마: {theme}</p>
      <Box />
    </>
  )
}

function Box() {
  const {theme} = useContext(ThemeContext);
  
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