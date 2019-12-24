import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Repo from '../containers/repo';


class ReposList extends Component {
  renderList() {
    return this.props.repos.map((repo) => {
      return (
        <Repo key={repo.id} repo={repo} />
      );
    });
  };

  render() {
    return (
      <div className="repos-container">
        <ul className="repos-entitled">
          <li className="repo-name">Name</li>
          <li className="repo-description">Description</li>
          <li className="repo-watchers">Watchers</li>
        </ul>
        <hr></hr>
        {this.renderList()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}


export default connect(mapStateToProps)(ReposList);
