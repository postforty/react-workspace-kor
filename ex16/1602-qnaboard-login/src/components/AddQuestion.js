import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { createQuestion } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddQuestion() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 질문 데이터
    const newQuestion = {
      subject,
      content,
    };

    createMutation.mutate(newQuestion);
  };

  const navigate = useNavigate();

  const createMutation = useMutation({
    mutationFn: (question) => createQuestion(question),
    onSuccess: () => {
      setSubject("");
      setContent("");
      navigate("/");
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">질문 추가하기</h1>

      <form
        onSubmit={handleSubmit}
        className="card w-full bg-base-100 shadow-xl p-6"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">제목</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">내용</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="btn sm:w-full md:w-1/6 lg:w-1/12 btn-secondary"
            onClick={() => navigate("/")}
          >
            취소
          </button>
          <button
            className="btn sm:w-full md:w-1/6 lg:w-1/12 btn-primary"
            type="submit"
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuestion;
