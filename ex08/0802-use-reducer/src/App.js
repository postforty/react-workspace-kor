import { useCallback, useMemo, useReducer, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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
  const {name, value} = action.payload
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [name]: value
        }
      }
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { users, inputs: { username, email } } = state;

  const onChange = e => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name, value }
    })
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>활성사용자 수 : 0</div>
    </>
  );
}

export default App;
