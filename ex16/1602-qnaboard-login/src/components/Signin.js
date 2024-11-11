import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { signin } from "../services/api";
import useUserStore from "../hook/useUserStore";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  // function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (user) => signin(user),
    onSuccess: (data) => {
      const { email, token } = data;
      console.log(email, token);
      setUser({ email, token });
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed: ", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에서 처리
    console.log("로그인 시도:", { email, password });
    mutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>

        {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              로그인
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{" "}
            <a href="/register" className="text-blue-500">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
