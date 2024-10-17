import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import { useState } from "react";
// import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  // const [count, setCount] = useState(0);

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
      </Routes>
    </>
  );
}

export default App;
