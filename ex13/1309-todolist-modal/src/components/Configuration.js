import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Configuration() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log("todos>>>", todos);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {todos.map((todo, index) => {
            console.log("todo, index>>>", todo, index);
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>{todo.create_date}</td>
                <td>{todo.due_date}</td>
                <td>{todo.done_date ? todo.done_date : "-"}</td>
                {/* <td>{todo.done_date ?? "-"}</td> */}
                <td>{todo.done ? "완료" : "미완료"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
}

export default Configuration;
