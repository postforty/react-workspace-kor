import { Route, Routes, useLocation } from "react-router-dom";
import QuestionBoard from "./components/QuestionBoard";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <button className="btn btn-ghost text-xl">QnA</button>
        <button className="btn btn-ghost text-xl">
          <span class="material-symbols-outlined">home</span>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<QuestionBoard />} />
        <Route path="/detail/:questionId" element={<QuestionDetail />} />
        <Route
          path="*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
