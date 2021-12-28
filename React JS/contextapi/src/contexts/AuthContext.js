import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

// class AuthContextProvider extends React.Component {

//     state = {
//         isLoggedIn: false
//     };

//     changeAuthStatus = () => {
//         this.setState({ isLoggedIn: !this.state.isLoggedIn })
//         // change to opposite
//     }

//     render() {
//         return(
//             <AuthContext.Provider value = {{ ...this.state, changeAuthStatus: this.changeAuthStatus}}>
//             {/* Wrapping child components want to share values (... = spread out syntax
//             so spread out values of the state) */}
//                 {this.props.children}
//             </AuthContext.Provider>
//         )
//     }
// }

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn)
    // change to opposite
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
      {/* Wrapping child components want to share values (... = spread out syntax 
            so spread out values of the state) */}
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
