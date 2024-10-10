import React from 'react'
import "./TodoList.css"
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div className="todo-list">
            <TodoItem />
        </div>
    )
}

export default TodoList