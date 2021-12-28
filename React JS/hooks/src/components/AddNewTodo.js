import React, { useState } from 'react'
// import TodoList from "./TodoList";

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // ^ prevents you from refreshing the page when you submit a form
    addTodo(todos) // what user types into the input field [addTodo is the prop is being passed to the TodoList]
    setTodos('') // set todo back to empty string
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">To do</label>
      <input
        type="text"
        value={todos}
        id="todo"
        onChange={(e) => setTodos(e.target.value)}
      />
      {/* get whatever value is inside the input ^ */}
      <input type="submit" />
    </form>
  )
}

export default AddNewTodo
