import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../services/api";
import useUserStore from "../hook/useUserStore";

function QuestionBoard() {
  const {
    user: { email },
  } = useUserStore();

  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ["posts", nextPage],
      queryFn: () => fetchQuestions(nextPage),
    });
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchQuestions(currentPage),
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
      <div className="card w-full bg-base-100 shadow-xl p-6 mb-6">
        <div className="overflow-x-auto mb-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>질문</th>
                <th>작성일</th>
                <th>답변수</th>
              </tr>
            </thead>
            <tbody>
              {data.content.map((question) => (
                <tr
                  className="hover:bg-base-200 cursor-pointer"
                  onClick={() =>
                    email
                      ? navigate(`/detail/${question.id}`)
                      : navigate("/signin")
                  }
                  key={question.id}
                >
                  <th>{question.id}</th>
                  <td>{question.subject}</td>
                  <td>{new Date(question.createDate).toLocaleDateString()}</td>
                  <td>{question.answerList.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="join m-auto">
          <button
            className="join-item btn"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button
            className="join-item btn"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBoard;
