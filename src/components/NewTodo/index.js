import React, {useState} from 'react'
import PropTypes from 'prop-types'

import "./styles.css"

 const NewTodo = ({onNewTodo}) => {

  const [value, setValue] = useState(''); 
  const enterKey = 13;
  const escapeKey = 27;

  const erase = () => {
    setValue('');
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    onNewTodo(value)
    erase();
  };
 
  const onKeyDown = (event) => {
    if (event.which === enterKey) {
      submit();
    } else if (event.which === escapeKey) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

NewTodo.propTypes = { 
  onNewTodo: PropTypes.func.isRequired
}

export default NewTodo
