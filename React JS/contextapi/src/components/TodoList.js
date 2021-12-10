import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext';


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
  const { todos } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext)
  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: '140px',
        textAlign: ' center',
      }}
    >
      {
        todos.length ? (
          todos.map((todo) => {
            return <p key = {todo.id} className = 'item'>{todo.text}</p>
          })
        ) : (
          <div>No Todos</div>
        )
      }
      {/* <p className = 'item'>Heona</p>
      <p className = 'item'>Wowo</p>
      <p className = 'item'>KayB Balaybee</p> */}

      <button className="ui button primary" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  )
}
export default TodoList
