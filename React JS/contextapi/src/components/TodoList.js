import React from "react";
import { ThemeContext } from '../contexts/ThemeContext'

class TodoList extends React.Component {
    static contextType = ThemeContext
    render() {
        const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme
        return (
            <div style = {{ background : theme.background, color: theme.text, height: '140px', textAlign : ' center'}} >
                <p className = 'item'>Play With MY Baby, KayB</p>
                <p className = 'item'>Make Sure My Bao Bei Wowo Is Having The Best Time Of His Life</p>
                <p className = 'item'>Eat Udon And TONS OF HOTPOT Till My Tummy Is Full</p>
                <button className = 'ui button primary' onClick = {changeTheme}>Change Theme</button>
            </div>
        )
    }
}

export default TodoList