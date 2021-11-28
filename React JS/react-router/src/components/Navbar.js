import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
// Link prevents the default action from happening.
//      stops it from reloading everytime we click a button (making a request to a server)
// NavLink applies a class = "active" to the element that is currently running

const Navbar = (props) => {
//   const navigate = useNavigate()
//   setTimeout(() => {
//     navigate(-1)
//   }, 2000)
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Mei Mei ~ Heona</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <NavLink to="/about">About</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
          {/* What does linking exactly do? */}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
