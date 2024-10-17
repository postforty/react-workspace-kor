import React, { useCallback, useRef } from 'react'
import useUserStore from './hooks/useUserStore';
import useInputs from './hooks/useInputs';

function CreateUser() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    })

    const { createUser } = useUserStore();

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        createUser({
            id: nextId.current,
            username,
            email
        })
        nextId.current++;
        reset();
    }, [username, email, reset]
    )



    return (
        <div>
            <input name="username" placeholder='이름' value={username} onChange={onChange} />
            <input name="email" placeholder='이메일' value={email} onChange={onChange} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);