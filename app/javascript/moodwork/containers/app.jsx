import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';

class App extends Component {

  render() {
    return(
      <div className="app">
        <SearchBar search={this.search} />
      </div>)
  }
}

export default App;
