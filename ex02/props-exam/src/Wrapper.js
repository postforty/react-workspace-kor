import React from 'react'

export default function Wrapper(props) {
    const style= {
        border: "2px solid black",
        padding: "16px"
    }
    return (
        <div style={style}>
            {props.welcome}
            {props.children}
        </div>
    )
}
