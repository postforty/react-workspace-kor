import React from 'react'
import './TodoTemplate.css'

function TodoTemplate({ children }) {
    return (
        <div className="todo-template">{children}</div>
    )
}

export default TodoTemplate