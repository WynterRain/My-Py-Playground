import React, { createContext, useState } from 'react'

export const TodoListContext = createContext()

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: 'Heona', id: 1 },
    { text: 'Wowo', id: 2 },
    { text: 'KayB', id: 3 },
  ])

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Math.random() }])
  }

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        //     ^  cycles through each item in array and check conditions
        return todo.id !== Number(id)
      }),
    )
  }

  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
