import React, { useState } from 'react';
import "../assets/css/TodoCreate.css";
import addIco from "../assets/svg/add.svg";
import { useTodoDispatch, useTodoNextId } from "../context/TodoContext";

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    // console.log("nextId>>>", nextId)

    const onToggle = () => setOpen(!open);
    const onChange = (e) => { setValue(e.target.value) };
    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue("");
        nextId.current++;
    };

    // console.log(value)

    return (
        <>
            {open && (
                <div className='insert-form-positioner' >
                    <form className='insert-form' onSubmit={onSubmit}>
                        <input
                            className="input"
                            autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요"
                            onChange={onChange}
                            value={value} />
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