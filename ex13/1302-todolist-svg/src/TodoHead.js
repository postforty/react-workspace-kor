import React from 'react'
import "./assets/css/TodoHead.css"

function TodoHead() {
    return (
        <div className="todo-head">
            <h1>2024년 10월 10일</h1>
            <div className="day">목요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default TodoHead