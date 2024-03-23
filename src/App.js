import React, { useState } from 'react';


import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'


export const App = () => {
  const initialTodos = []
  const [todos, setTodos] = useState(initialTodos);

  const handleDelete = (todo) => {
    const newTodos = todos.filter((obj) => obj.id !== todo.id)
    console.log(newTodos)
    setTodos(newTodos)
  } 
  const onToggle = (todo) => { 
    setTodos( 
      todos.map((obj) => 
        obj.id === todo.id ?  { ...obj, checked: !todo.checked }: obj
      )
    )
  }

  const onNewTodo = (value) => { 
    const newTodo = [...todos]
    newTodo.push({ 
      id: new Date().getTime(), 
      title:value,
      checked: false
    })
    setTodos(newTodo)
  }
  
  return (    
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo-list</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo = {onNewTodo}/>
        <TodoList todos={todos} onToggle={onToggle} handleDelete ={handleDelete}/>
      </section>
    </section>
  );
};
export default App;
