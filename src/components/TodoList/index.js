import React from 'react';
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md';
import "./styles.css"


const TodoList = ({todos, onToggle, handleDelete}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            className={['todo', todo.checked ? 'ckecked' : ''].join(' ')}
            onClick={() => {
              onToggle(todo);
            }}
            onKeyPress={() => {
              onToggle(todo);
            }}
            role="button"
          >
            {todo.title}
          </span>
          <button
            className="remove"
            type="button"
            onClick={() => {
              handleDelete(todo);
            }}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = { 
  todos: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default TodoList;
