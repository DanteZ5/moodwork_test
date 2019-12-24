import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Avatar extends Component {
  render() {
    return (
      <img src={this.props.avatar} alt="avatar" className="avatar-bordered"/>
    )
  }

}

function mapStateToProps(state) {
  return {
    avatar: state.avatar
  };
}


export default connect(mapStateToProps)(Avatar);
