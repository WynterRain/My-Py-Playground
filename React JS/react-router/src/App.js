import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card/:user" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
