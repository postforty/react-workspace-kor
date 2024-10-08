import React, { useCallback } from "react";
import useUserStore from "./hooks/useUserStore";

const User = React.memo(
    function User({ user }) {
        const { toggleUser, removeUser } = useUserStore();

        const onToggle = useCallback(
            () => toggleUser(user.id), []
        );

        const onRemove = useCallback(
            () => removeUser(user.id), []
        );


        return (
            <div>
                <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}
                    onClick={onToggle}>{user.username}</b>
                &nbsp;
                <span>({user.email})</span>
                <button onClick={onRemove}>삭제</button>
            </div>
        )
    }
);


function UserList() {
    const { users } = useUserStore();

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default React.memo(UserList);