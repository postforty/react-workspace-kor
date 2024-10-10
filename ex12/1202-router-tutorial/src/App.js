import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import { useState } from "react";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  // const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">뒤로가기 예제</Link>
        </li>
        {/* <li>
          <a href="/">홈(a)</a>
        </li> */}
      </ul>
      {/* <p>{count}</p>
      <button onClick={() => setCount(prev=>prev + 1)}>+</button>
      <button onClick={() => setCount(prev=>prev - 1)}>-</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        {/* 하위 라우트를 처리하기 위해 * 추가 */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path="*" element={<div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          {/* <p>{window.location.pathname}</p> */}
          {location.pathname}
        </div>} />
      </Routes>
    </>
  );
}

export default App;
