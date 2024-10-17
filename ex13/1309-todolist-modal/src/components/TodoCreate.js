import React, { useState } from "react";
import "../assets/css/TodoCreate.css";
import addIco from "../assets/svg/add.svg";
import useTodoStore from "../hooks/useTodoStore";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [dueDate, setDudeDate] = useState("");

  const { handleCreateTodo } = useTodoStore();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onDueDateChange = (e) => {
    setDudeDate(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지

    const creationDate = new Date().toISOString().split("T")[0];

    await handleCreateTodo(value, creationDate, dueDate);

    setValue("");
    setDudeDate("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="insert-form-positioner">
          <form className="insert-form" onSubmit={onSubmit}>
            <label htmlFor="dueDate">마감일을 선택하세요.</label>
            <input
              type="date"
              className="input"
              onChange={onDueDateChange}
              value={dueDate}
            />
            <input
              className="input"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </form>
        </div>
      )}
      <button className={`circle-button ${open && "open"}`} onClick={onToggle}>
        <img src={addIco} alt="add icon" style={{ width: "50px" }} />
      </button>
    </>
  );
}

export default TodoCreate;
