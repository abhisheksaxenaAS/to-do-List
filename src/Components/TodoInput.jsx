import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <form className="flex justify-between items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        className="w-full p-2 border border-gray-300 rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
    </form>
  );
};

export default TodoInput;
