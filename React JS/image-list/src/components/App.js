import React from 'react';
import SearchInput from './SearchInput'

class App extends React.Component {
    onSearchSubmit = (entry) => {
        console.log(entry)
        // When the parent is called from child component it will log it in the console
    }
    render() {
        return (
            // Styling
            <div className = 'ui container' style = {{marginTop: '30px'}}> 
            {/* styling and decorating the input box */}
                <SearchInput onSearchSubmit = {this.onSearchSubmit} />
                {/* change input to the input we put in when we submit with enter button */}
            </div>
        )
    }
}

export default App;