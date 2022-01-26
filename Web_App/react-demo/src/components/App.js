import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { Component } from 'react';
import Header from './Header';
import MovieList from './MovieList';

import Home  from "./Home";


class App extends Component {
  state = { message : "wow!!!!!!!!!!!!!!"  }
  render() {
    return (
      <BrowserRouter> 
        <div>
          <Header />
          {/* <div className= "container" > */}
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/movies" element = {<MovieList />} />
            </Routes>
          {/* </div> */}
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;