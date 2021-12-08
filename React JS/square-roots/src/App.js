import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'
import FlashCard from './components/FlashCard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* Switch - Only allows one of the routes to be happening not 2 at the same time!
             - Goes in order */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/flash" component={FlashCard} />
          <Route path="/:user" component={Card} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
