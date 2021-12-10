import React, { useState, useEffect } from 'react'
import AddNewTodo from './AddNewTodo'


const TodoList = () => {
  const [todos, setTodos] = useState([
    //  ^ thing with value
    //           ^ thing to edit value
    {
      text: 'Give Wowo 1000x Kissies and Huggles and Squishies To Make Sure Wowo Knows He Is Very Loved By Mei Mei Bao Bei Lei',
      id: 1,
    },
    {
      text: 'Get The 20 Million Packets Of Udon From Outside That KayB Ordered For Me',
      id: 2,
    },
    { text: 'Eat All The Udon and REPEAT', id:3, },
  ])

  const [count, setCount] = useState(0) // 0 is initial value!

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { text, id: Math.random() },
      // ^ text:text (es2016 shortcut)
    ])
  }

  // useEffect() - used when rendering + rerendering and whent he component changes on certain data
  useEffect(() => {
    // runs whenever component rerenders or renders (also can use as many times as needed)
    console.log('use effect', todos)

  },[count]) // 2nd params makes it so it runs when the todos function changes, NOT click score button

  useEffect(() => {
    // runs whenever component rerenders or renders (also can use as many times as needed)
    console.log('use effect', count)
  }, [count]) // only when count changes it fires the console

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          // map to a new array of html templates
          return (
            <li key={todo.id}>{todo.text}</li>
            //  ^^^ when mapping over elements, you NEED to have a unique id
          )
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count} </button>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ inline arrow function  */}
    </div>
  )
}

export default TodoList
