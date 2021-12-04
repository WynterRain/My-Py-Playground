import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends React.Component {
  //   static contextType = ThemeContext

  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                // .consumer = consume the themecontext
                // consumes multiple context in 1 component
                const { isDarkTheme, darkTheme, lightTheme } = themeContext
                const { isLoggedIn, changeAuthStatus } = authContext
                const theme = isDarkTheme ? darkTheme : lightTheme
                //    ^ if dark theme is true then ^ otherwise ^
                return (
                  // return jsx
                  <nav
                    style={{
                      background: theme.background,
                      color: theme.text,
                      height: '120px',
                    }}
                  >
                    <h2 style={{ textAlign: 'center' }}>Heona Academy</h2>
                    <p
                      onClick={changeAuthStatus}
                      style={{ textAlign: 'center' }}
                    >
                      {isLoggedIn ? 'logged in' : 'logged out'}
                    </p>
                    <div className="ui three buttons">
                      <button className="ui button">Overview</button>
                      <button className="ui button">Contact</button>
                      <button className="ui button">Support</button>
                    </div>
                  </nav>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar
