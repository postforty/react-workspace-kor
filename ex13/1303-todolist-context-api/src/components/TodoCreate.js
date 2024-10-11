import React, { useState } from 'react';
import "../assets/css/TodoCreate.css";
import addIco from "../assets/svg/add.svg";

function TodoCreate() {
    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <div className='insert-form-positioner'>
                    <form className='insert-form'>
                        <input className="input" autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                    </form>
                </div>
            )}
            <button className={`circle-button ${open && "open"}`} onClick={onToggle}>
                <img src={addIco} alt="add icon" style={{width: "50px"}}/>
            </button>
        </>
    );
}

export default TodoCreate;