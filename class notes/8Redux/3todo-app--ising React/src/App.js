import {Provider} from 'react-redux'
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import './App.css';
import { store } from "./redux/store";

function App() {
  return (
    <div>
      <h1>To Do App</h1>
      <Provider store={store}>
        <TodoForm  />
        <TodoList  />
      </Provider>
    </div>
  );
}

export default App;
