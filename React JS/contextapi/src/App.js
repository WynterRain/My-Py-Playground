import React from 'react'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <div className = 'ui raised very padded text container segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
          {/* Context surrounds the components that it want to share state values with */}
            <Navbar />
            <TodoList />
          </ThemeContextProvider>  
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
