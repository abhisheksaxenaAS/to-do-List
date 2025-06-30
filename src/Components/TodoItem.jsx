import React from 'react';
import { MdDelete } from "react-icons/md";
const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">{todo.text}</span>
      <  MdDelete
        onClick={() => removeTodo(todo.id)} 
        className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-700" 
      />
    </div>
  );
};

export default TodoItem;
