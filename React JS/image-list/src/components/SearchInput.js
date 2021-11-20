import React from 'react';

class SearchInput extends React.Component {
    // Class SearchInput wraps React.Component meaning it has the same features as the react

    // constructor() {
    //     super()
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }
    /*
        controlled and uncontrolled components
    */
    state = { textInput : ''}
    // key value pair, can have more than 1 object.
    
    onFormSubmit = (event) => {
    // Arrow Function To Check If Pressing 'Enter' (Event Argument) 
       event.preventDefault(
        // prevents the default (which is reloading or refreshing once enter is hit)
        this.props.onSearchSubmit(this.state.textInput)
        // Will call the parent component (App.js)
        )}

    render() {
    // Producing some JSX
        return(
            <div className = 'ui segment' >
                <form onSubmit = {this.onFormSubmit} className = 'ui form' >
                    <div className = 'field'>
                        <div className = 'ui massive icon input'>
                            <input 
                                type = "text" 
                                placeholder = 'type...' 
                                // Placeholder, if there is nothing inside the text box
                                onChange = {(event) => this.setState({textInput:event.target.value})}
                                // 'onChange' is a MUST USE word, otherwise won't work. When it sees the text box is modified, 
                                // then it will 'setState' and change the value of the text box.
                                // target = what the value was before the change
                                value ={this.state.textInput}
                                // changes the value to the input
    
                            /> 
                           
                            <i className = 'search icon'></i> 
                             {/* samantic ui, search icon on text box */}
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SearchInput;