import React from 'react'
import "../assets/css/TodoList.css"
import TodoItem from './TodoItem'
import { useTodoState } from '../context/TodoContext';

function TodoList() {
    const todos = useTodoState();

    // console.log(todos);

    return (
        <div className="todo-list">
            {todos.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)}
        </div>
    )
}

export default TodoList