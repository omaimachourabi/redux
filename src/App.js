import './App.css';
import TodoList from './componets/TodoList';
import TodoInput from './componets/TodoInput';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
