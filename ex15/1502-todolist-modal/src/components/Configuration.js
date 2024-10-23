import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "flowbite-react";

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
      <header className="bg-green-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold leading-none">할일 전체 보기</h1>
          <Button className="bg-teal-400" pill onClick={() => navigate("/")}>
            <span className="material-symbols-outlined">home</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>할일</Table.HeadCell>
                <Table.HeadCell>생성일</Table.HeadCell>
                <Table.HeadCell>마감일</Table.HeadCell>
                <Table.HeadCell>완료일</Table.HeadCell>
                <Table.HeadCell>완료 여부</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {todos.map((todo, index) => {
                  console.log("todo, index>>>", todo, index);
                  return (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>{todo.id}</Table.Cell>
                      <Table.Cell>{todo.text}</Table.Cell>
                      <Table.Cell>{todo.create_date}</Table.Cell>
                      <Table.Cell>{todo.due_date}</Table.Cell>
                      <Table.Cell>
                        {todo.done_date ? todo.done_date : "-"}
                      </Table.Cell>
                      <Table.Cell>{todo.done ? "완료" : "미완료"}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
      </main>

      <footer className="bg-green-400 text-white p-4 text-center">
        <p>&copy; 2024 My ToDo List</p>
      </footer>
    </div>
  );
}

export default Configuration;
