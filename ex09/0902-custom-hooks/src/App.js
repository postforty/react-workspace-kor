import { useCallback, useMemo, useReducer, useRef } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value
        }
      }
    case "CREATE_USER":
      return { inputs: initialState.inputs, users: [...state.users, action.payload] };
    case "TOGGLE_USER":
      return {
        ...state, users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, active: !user.active }
            : user)
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    default:
      return state;
  }
}

function App() {
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  })

  const [state, dispatch] = useReducer(reducer, initialState)
  // const { users, inputs: { username, email } } = state;
  const {users} = state;
  const nextId = useRef(4);

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;

  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     payload: { name, value }
  //   })
  // }, [])

  // console.log("nextId>>>",nextId)

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      payload: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
    reset();
  }, [username, email])

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      payload: { id }
    })
  }, [])

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: { id }
    })
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
