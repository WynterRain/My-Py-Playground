import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
// Link - Prevents default action (calling the index.js whenever from reloading)
// NavLink - Applies a class = 'active' in inspection tool when user is on that page
// withRouter - Higher Order Component (like a super charged component)

const Navbar = () => {
  //   console.log(props)
  //   setTimeout(() => {
  //     props.history.push('/about')
  //   }, 2000)
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Meizie Mei</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <NavLink to="/about">About</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/flash">Flash Card</NavLink>
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
