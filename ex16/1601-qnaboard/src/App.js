import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QuestionBoard from "./components/QuestionBoard";
import QuestionDetail from "./components/QuestionDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddQuestion from "./components/AddQuestion";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <button className="btn btn-ghost text-xl">QnA</button>
        <div>
          <button
            className="btn btn-ghost text-xl"
            onClick={() => navigate("/create")}
          >
            <span className="material-symbols-outlined">post_add</span>
          </button>
          <button
            className="btn btn-ghost text-xl"
            onClick={() => navigate("/")}
          >
            <span className="material-symbols-outlined">home</span>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<QuestionBoard />} />
        <Route path="/create" element={<AddQuestion />} />
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
