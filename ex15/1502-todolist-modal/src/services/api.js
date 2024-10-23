export const fetchTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");

  const todos = await response.json();

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const filteredTodos = todos.filter((todo) => {
    return !todo.due_date || todo.due_date >= todayStr;
  });

  return filteredTodos;
};

export const toggleTodo = async (id, done) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done }),
  });
  // throw new Error("Failed to toggle todo");
  if (!response.ok) throw new Error("Failed to toggle todo");
  return response.json();
};

export const removeTodo = async (id) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to remove todo");
  return response.json();
};

export const createTodo = async (text, creationDate, dueDate) => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      create_date: creationDate,
      due_date: dueDate,
      done_date: "",
      done: false,
    }),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
};

export const modifyTodo = async (id, text, dueDate) => {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      due_date: dueDate,
    }),
  });
  if (!response.ok) throw new Error("Failed to modify todo");
  return response.json();
};
