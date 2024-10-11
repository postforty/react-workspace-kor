import React from 'react'
import "./TodoItem.css"

function TodoItem({ id, done, text }) {
    return (
        <div className="todo-item-block">
            <div className={`check-circle ${done ? "done" : ""}`}>
                {
                    done && <span className="material-symbols-outlined">
                        check
                    </span>
                }
            </div>
            <div className={`text ${done && "done"}`}>{text}</div>
            <div className="remove">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div >
    )
}

export default TodoItem