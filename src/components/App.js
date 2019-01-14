import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
  renderButton() {}

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
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
};
