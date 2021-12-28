import React, { createContext, useReducer } from 'react'
import { todosReducer } from '../reducers/todosReducer'


export const TodoListContext = createContext()

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: 'Heona', id: 1 },
    { text: 'Wowo', id: 2 },
    { text: 'KayB', id: 3 },
  ])

  // const addTodo = (todo) => {
  //   setTodos([...todos, { text: todo, id: Math.random() }])
  // }

  // const removeTodo = (id) => {
  //   setTodos(
  //     todos.filter((todo) => {
        
  //       return todo.id !== Number(id)
  //     }),
  //   )
  // }

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
