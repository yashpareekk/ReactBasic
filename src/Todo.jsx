import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, DeleteTodoAction } from './actions/TodoAction';
import './Todo.css';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const TodoState = useSelector((state) => state.Todo);
  const { todos } = TodoState;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo(''); 
  };

  const handleDelete = (t) => {
    dispatch(DeleteTodoAction(t));
  };

  return (
    <div className='todo-container'>
      <header className='todo-header'>
        <h2>Todo List Using Redux</h2>
        <form onSubmit={handleFormSubmit} className='todo-form'>
          <input
            className='todo-input'
            placeholder='Enter a task'
            type='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' className='todo-submit-button'>
            Submit
          </button>
        </form>
        <ul className='todo-list'>
          {todos &&
            todos.map((t) => (
              <li key={t.id} className='todo-item'>
                <span className='todo-text'>{t.todo}</span>
                <button onClick={() => handleDelete(t)} className='todo-delete-button'>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
};

export default Todo;
