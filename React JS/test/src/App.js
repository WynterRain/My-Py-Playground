import './App.css'
import React from 'react'
import { CssBaseline } from '@material-ui/core'
import NavBar from './Navbar'
import DvdListPage from './DvdListPage'
import DvdDetailPage from './DvdDetailPage'
import HomePage from './HomePage'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<div>
				<CssBaseline />
				<NavBar />
				<Switch>
					<Route path='/' exact component={HomePage}></Route>
					<Route path='/list' component={DvdListPage}></Route>
					<Route path='/details/:id' component={DvdDetailPage}></Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
