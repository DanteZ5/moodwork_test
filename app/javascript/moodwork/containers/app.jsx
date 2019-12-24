import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Avatar from './avatar.jsx';
import ReposList from './repos_list.jsx';


class App extends Component {

  render() {
    return(
      <div className="app">
        <div className="head-zone">
          <SearchBar />
          <Avatar />
        </div>
        <ReposList />
      </div>
    )
  }
}

export default App;
