import React, { useEffect, useState } from "react";
import "../assets/css/TodoItem.css";
import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/delete.svg";
import useTodoStore from "../hooks/useTodoStore";
import { toast } from "react-toastify";

function TodoItem({ id, done, text, dueDate, openModal }) {
  const { handleRemoveTodo, handleToggleTodo } = useTodoStore();

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];
  console.log(todayStr);

  useEffect(() => {
    const notify = () =>
      toast.warn(`"${text}"을 오늘까지 끝내야 합니다!`, {
        toastId: id,
      });

    if (dueDate === todayStr && !done) {
      notify();
    }
  }, []);

  const [hoveredDelete, setHoverdDelete] = useState(false);
  return (
    <div className="todo-item-block">
      <div className="item" onClick={() => handleToggleTodo(id, done)}>
        <div className={`check-circle ${done ? "done" : ""}`}>
          {done && <CheckIcon fill="#38d9a9" />}
        </div>
        <div className={`text ${done && "done"}`}>
          {text}
          <small>( ~ {dueDate}까지)</small>
        </div>
      </div>
      <div className="icon amend" onClick={() => openModal()}>
        <span class="material-symbols-outlined">amend</span>
      </div>
      <div className="remove" onClick={() => handleRemoveTodo(id)}>
        <DeleteIcon
          onMouseEnter={() => setHoverdDelete(true)}
          onMouseLeave={() => setHoverdDelete(false)}
          fill={hoveredDelete ? "#ff6b6b" : "#dee2e6"}
        />
      </div>
    </div>
  );
}

export default TodoItem;
