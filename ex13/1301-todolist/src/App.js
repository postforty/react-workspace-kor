import './App.css';
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
      </TodoTemplate>
    </>
  );
}

export default App;
