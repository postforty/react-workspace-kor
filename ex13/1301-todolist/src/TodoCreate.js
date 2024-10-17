import React, { useState } from 'react';
import "./TodoCreate.css"

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
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        </>
    );
}

export default TodoCreate;