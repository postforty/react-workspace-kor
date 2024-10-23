import React from "react";
import "../assets/css/TodoHead.css";
import useTodoStore from "../hooks/useTodoStore";
import { useNavigate } from "react-router-dom";

function TodoHead() {
  const { todos } = useTodoStore();
  const undoneTasks = todos.filter((todo) => !todo.done).length;
  const navigate = useNavigate();

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <>
      <button
        className="circle-config-button"
        onClick={() => navigate("/configuration")}
      >
        <span className="material-symbols-outlined">settings</span>
      </button>
      <div className="todo-head">
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">할 일 {undoneTasks}개 남음</div>
      </div>
    </>
  );
}

export default TodoHead;
