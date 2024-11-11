import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QuestionBoard from "./components/QuestionBoard";
import QuestionDetail from "./components/QuestionDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddQuestion from "./components/AddQuestion";
import Signin from "./components/Signin";
import useUserStore from "./hook/useUserStore";

const queryClient = new QueryClient();

function App() {
  const {
    user: { email },
    clearUser,
  } = useUserStore();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("handleSignOut");
    clearUser();
  };

  const handleSignIn = () => {
    console.log("handleSignIn");
    navigate("/signin");
  };

  console.log("location>>>", location);

  return (
    <QueryClientProvider client={queryClient}>
      {location.pathname !== "/signin" && (
        <div className="navbar bg-neutral text-neutral-content flex justify-between">
          <div>
            <button className="btn btn-ghost text-xl">QnA</button>
            {email ? (
              <div>
                <span>안녕하세요, {email}님. </span>
                <button
                  className="text btn btn-sm btn-ghost"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <button
                  className="text btn btn-sm btn-ghost"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
                <button className="text btn btn-sm btn-ghost btn-outline bg-white">
                  Sign up
                </button>
              </>
            )}
          </div>
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
      )}
      <Routes>
        <Route path="/" element={<QuestionBoard />} />
        <Route path="/create" element={<AddQuestion />} />
        <Route path="/signin" element={<Signin />} />
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
