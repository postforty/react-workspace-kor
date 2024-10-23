import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionBoard() {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

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
              <tr
                className="hover:bg-base-200 cursor-pointer"
                onClick={() => navigate(`/detail/1`)}
              >
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr
                className="hover:bg-base-200 cursor-pointer"
                onClick={() => navigate(`/detail/1`)}
              >
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
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
