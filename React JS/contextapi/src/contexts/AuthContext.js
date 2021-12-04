import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {

    state = {
        isLoggedIn: false
    };

    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
        // change to opposite
    }

    render() {
        return(
            <AuthContext.Provider value = {{ ...this.state, changeAuthStatus: this.changeAuthStatus}}>
            {/* Wrapping child components want to share values (... = spread out syntax 
            so spread out values of the state) */}
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContextProvider