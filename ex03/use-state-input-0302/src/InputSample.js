import { useState } from "react";

const InputSample = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={()=> setText('')}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample;