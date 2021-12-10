import React, { createContext, useState }  from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
    {text: 'Heona', id: 1},
    {text: 'Wowo', id: 2},
    {text: 'KayB' , id: 3},
    ]);

    return (
        <TodoListContext.Provider value = {{ todos }}>
            {children}
        </TodoListContext.Provider>
    )
};


export default TodoListContextProvider