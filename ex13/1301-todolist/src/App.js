import './App.css';
import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function App() {
  return (
    <>
      {/* <div>안녕하세요</div> */}
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
