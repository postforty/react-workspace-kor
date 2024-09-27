const User = ({ user, onRemove, onToggle }) => {
    const { id, username, email, active } = user;
    const style = {
        cursor: 'pointer',
        color: active ? "green" : "black",
        backgroundColor: active && 'yellow'
    }
    return (
        <div>
            <b style={style} onClick={() => onToggle(id)}>{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <div>
            {users.map(user =>
                <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
            )}
        </div>
    )
}

export default UserList;