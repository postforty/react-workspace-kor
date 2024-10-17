import React, { useEffect, useState } from "react";

function Configuration() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  return (
    <div>
      <h1>할일 전체 보기</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>할일</th>
            <th>생성일</th>
            <th>마감일</th>
            <th>완료일</th>
            <th>완료 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>할일1</td>
            <td>2024-10-16</td>
            <td>2024-10-20</td>
            <td>2024-10-20</td>
            <td>완료</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Configuration;
