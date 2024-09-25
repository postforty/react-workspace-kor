import React from 'react'

function Hello({ name = "익명", color, isSpecial }) {
    console.log(name);
    // const { name } = props;
    return (
        <div style={{color: color}}>{isSpecial ? <b>*</b> : null}{name}님 안녕하세요!</div>
    )
}

export default Hello