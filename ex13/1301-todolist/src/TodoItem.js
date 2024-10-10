import React from 'react'
import "./TodoItem.css"

function TodoItem() {
    return (
        <div className="todo-item-block">
            할일1
            {/* <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove> */}
        </div >
    )
}

export default TodoItem