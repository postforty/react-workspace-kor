import React from "react";
import { useLocation } from "react-router-dom";
import { fetchQuestionDetail } from "../services/api";
import { useQuery } from "@tanstack/react-query";

function QuestionDetail() {
  const location = useLocation();

  const questionId = location.pathname.split("/")[2];

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", questionId],
    queryFn: () => fetchQuestionDetail(questionId),
    staleTime: 2000,
  });

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>error : {error.message}</h3>;
  }

  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">
          [{data.id}] {data.subject}
        </h1>
        <label className="label">
          <span className="label-text">작성자: {data.author?.email}</span>
          <span className="label-text">
            작성일: {new Date(data.createDate).toLocaleString()}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full h-96"
          readOnly
          value={data.content}
        ></textarea>
      </div>
      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4">답변 목록</h3>
        {data.answerList.length !== 0 ? (
          data.answerList.map((answer) => (
            <div className="mb-4">
              <label className="label">
                <span className="label-text">
                  작성자: {answer.author.email}
                </span>
                <span className="label-text">
                  작성일: {new Date(answer.createDate).toLocaleString()}
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-20"
                readOnly
                value={answer.content}
              ></textarea>
            </div>
          ))
        ) : (
          <p className="text-gray-500">답변이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default QuestionDetail;
