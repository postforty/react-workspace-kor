import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Content from "./Content";

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





