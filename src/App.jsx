import React, { useState } from 'react';
import './Styles/index.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-todo-bg bg-cover bg-center flex justify-center items-center p-4">
  <div className="w-96 h-96 bg-white bg-opacity-80 rounded-lg p-4 overflow-auto">
    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
    <TodoInput addTodo={addTodo} /> {/* Component for adding todos */}
    <div className="overflow-auto"> {/* Ensure long text wraps within the container */}
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} /> {/* Component for displaying todos */}
    </div>
  </div>
</div>

   );
}

export default App;
