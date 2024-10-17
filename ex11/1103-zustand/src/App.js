import { useCallback, useMemo, useReducer, useRef } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import useUserStore from "./hooks/useUserStore";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
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
      console.log(action);
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    default:
      return state;
  }
}

function App() {
  const {users} = useUserStore();

  const [state, dispatch] = useReducer(reducer, initialState)
  // const { users, inputs: { username, email } } = state;
  // const { users } = state;
  

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser />
      <UserList />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
