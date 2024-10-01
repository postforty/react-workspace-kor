import { useCallback, useMemo, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  // console.log(inputs);

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs, [name]: value
      })
    }
    , [inputs])

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '오일남',
      email: 'o1@example.com',
      active: false
    },
    {
      id: 2,
      username: '오이남',
      email: 'o2@example.com',
      active: false
    },
    {
      id: 3,
      username: '오삼남',
      email: 'o3@example.com',
      active: false
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email,
      };

      setUsers(prev => [...prev, user]);

      nextId.current += 1;
    }, [username, email]
  );


  // console.log(users);

  const onRemove = useCallback(
    (id) => {
      setUsers(prev => prev.filter(user => user.id !== id));
    }, []
  );

  const onToggle = useCallback(
    id => {
      setUsers(prev =>
        prev.map(user => user.id === id ? { ...user, active: !user.active } : user)
      )
    }, []
  );


  // console.log(users)
  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
