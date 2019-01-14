import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button>
          Sign out
        </button>
      );
    } else {
      return (
        <button>
          Sign in
        </button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <l1>
          <Link to="/">Home</Link>
        </l1>
        <l1>
          <Link to="/post">Post A Comment</Link>
        </l1>
        <l1>{this.renderButton()}</l1>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
