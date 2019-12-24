import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchRepos } from '../actions';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    const githubUser = this.state.value;
    this.props.fetchRepos(githubUser);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <input type="text" value={this.state.value} placeholder="github username" onChange={this.handleChange}/>
        <input type="submit" value="Envoyer"/>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
