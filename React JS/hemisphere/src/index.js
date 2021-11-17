import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { latitude: null, errorMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div> {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.latitude) {
            return <div> {this.state.latitude} </div>
        }
    
        else {
            return <div>Loading . . .</div>
        }
    }   
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

// Rules Of Class Based Components
// - Must Be a JS Class
// - Must Extends React.Component
// - Must Define A 'Render' Method

// State Rules
// - Only usable withh class components
// 'State' is a JS object that contains data relevant to a component
// Updating state on a component causes the component to reerender
// State must be initialized when a component is created
// State can only be updated using the function 'setState'

// Step By Step
// - JS file loaded up by broswer
// - App component gets created
// - Constructor function gets called
// - 'this.state' property is assigned the state object
// - We call geolocation service
// - React calls the components render method
// - App returns JSX, gets rendered to page as HTML
// - We get results of geolocation
// - We update our state object with 'this.setState'
// - React calls 'render' method second time
// - Render methods returns some JSX
// - React takes that JSX and updates content on the screen

// Lifecycle Methods
// - Constructor > Good place to one time setup
// - Render > Just return JSX
// - componentDidMount > Good place to data loading
// - componentDidUpdate > Good place to do more data loading when state/props change
// - componentWillUnmount > Good place to do clean up
//// Other Lifecycle Methods That Are RARELY used
//// - shouldComponentUpdate
//// - getDerivedStateFromProps
//// - getSnapshotBeforeUpdate