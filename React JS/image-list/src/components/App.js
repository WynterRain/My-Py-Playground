import React from 'react'
import axios from 'axios'
import SearchInput from './SearchInput'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }
  // storing an array of images in the state
  onSearchSubmit = async (entry) => {
    // wut does async do?
    const test = 'je;l;;'
    // When the parent is called from child component it will log it in the console
    // - async allows us to use the await syntax in the function
    const response = await axios.get(
      `https://pixabay.com/api/?key=24434048-fba2194388180c31d5f478f1c&q=${entry}s&image_type=photo`,
    )
    // get images through api with api key ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ replace the query with our entry.
    // what does awaiting do? wuz is const
    this.setState({ images: response.data.hits })
    // edits the value of image object to the results
  }
  render() {
    return (
      // Styling
      <div className="ui container" style={{ marginTop: '30px' }}>
        {/* styling and decorating the input box */}
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        {/* change input to the input we put in when we submit with enter button */}
        <ImageList images={this.state.images} />
        {/* shows the our photos that were found*/}
      </div>
    )
  }
}

export default App

// Timeline
// - Component Render First Time With NO Images
// - When onSearchSubmit() is called
// - Makes a request to pixabay with entry
// - Pixabay finds the entry and request is complete
// - Puts the images that pixabay finds on state using setState
// - App components rerenders and shows the imaages
