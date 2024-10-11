import React from 'react'
import "../assets/css/TodoList.css"
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div className="todo-list">
            <TodoItem text="할일1" done={true}/>
            <TodoItem text="할일2" done={true}/>
            <TodoItem text="할일3" done={false}/>
            <TodoItem text="할일4" done={false}/>
        </div>
    )
}

export default TodoList