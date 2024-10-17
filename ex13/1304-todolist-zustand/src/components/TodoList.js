import React from 'react'
import "../assets/css/TodoList.css"
import TodoItem from './TodoItem'
import useTodoStore from "../hooks/useTodoStore"


function TodoList() {
    const { todos } = useTodoStore();

    console.log(todos);

    return (
        <div className="todo-list">
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />)
            }
        </div>
    )
}

export default TodoList