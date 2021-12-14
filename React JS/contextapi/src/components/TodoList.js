import React, { useContext  } from 'react'
import { useState } from 'react/cjs/react.development'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext'

// class TodoList extends React.Component {
//     static contextType = ThemeContext
//     render() {
//         const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme
//         return (
//             <div style = {{ background : theme.background, color: theme.text, height: '140px', textAlign : ' center'}} >
//                 <p className = 'item'>Play With MY Baby, KayB</p>
//                 <p className = 'item'>Make Sure My Bao Bei Wowo Is Having The Best Time Of His Life</p>
//                 <p className = 'item'>Eat Udon And TONS OF HOTPOT Till My Tummy Is Full</p>
//                 <button className = 'ui button primary' onClick = {changeTheme}>Change Theme</button>
//             </div>
//         )
//     }
// }

const TodoList = () => {
  const [todo, setTodo] = useState('');

  const { todos, addTodo, removeTodo } = useContext(TodoListContext)
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTodo(todo)
  }

  const handleRemoveTodo = (e) => {
    const id = e.target.id
    removeTodo(id);
  }
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        
        textAlign: ' center',
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p id = {todo.id} onClick = {handleRemoveTodo} key={todo.id} className="item">
              {todo.text}
            </p>
          )
        })
      ) : (
        <div>No Todos</div>
      )}
      {/* <p className = 'item'>Heona</p>
      <p className = 'item'>Wowo</p>
      <p className = 'item'>KayB Balaybee</p> */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='todo'>Add A New Todo:</label>
        <input type = 'text' id = 'todo' onChange={handleChange} />
        <input type = 'submit' value = 'Add New Todo' className = 'ui button primary' />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  )
}
export default TodoList
