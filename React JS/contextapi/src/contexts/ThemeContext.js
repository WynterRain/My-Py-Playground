import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c'
        }
    }

    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
        // sets the OPPOSITE of the value of the isDarkTheme (then all child components will rerender)
    };

    render() {
        return(
            <ThemeContext.Provider value = {{ ...this.state, changeTheme: this.changeTheme }}>
            {/* .Provider =^^^^^^ Provides context data to the component (it is provided by context itself) */}
                {this.props.children}
            {/* ^^^^^^^^^^^^^^^^^^^^^ refers to the children that the component wraps (navbar and todoList) */}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;