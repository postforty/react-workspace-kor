import React from 'react'
import './assets/css/TodoTemplate.css'

function TodoTemplate({ children }) {
    return (
        <div className="todo-template">{children}</div>
    )
}

export default TodoTemplate