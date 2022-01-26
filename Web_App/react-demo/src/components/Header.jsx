import React, { Component } from 'react'
// type imrc

class Header extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Movie Browser</h3>
            </div>
            <div className="col-md-8">
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
