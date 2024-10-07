import { create } from "zustand";

const useStore = create((set) => ({
  theme: "light",
  toggleTheme: () => {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
  }
}));

export default function App() {
  return (
    <div>
      <h1>Zustand Theme Example</h1>
      <ThemeToggle />
      <Content />
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useStore();

  return <button onClick={toggleTheme}>{theme}</button>
}

function Content() {
  const { theme } = useStore();

  return (
    <>
      <p>현재 테마: {theme}</p><Box />
    </>
  )
}

function Box() {
  const { theme } = useStore();

  return <div style={{
    padding: "20px",
    backgroundColor: theme === "dark" ? "#000" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    height: "200px",
    border: "1px solid #000"
  }}>상자의 테마는 {theme}</div>
}