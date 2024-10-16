import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/App.css";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import Configuration from "./components/Configuration";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
          }
        />
        <Route path="/configuration" element={<Configuration />} />
        <Route
          path="*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{window.location.pathname}</p>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
