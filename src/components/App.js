import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends Component {
  state = {
    comment: "",
    comments: []
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: this.state.comments.concat(this.state.comment),
      comment: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <CommentBox
          comment={this.state.comment}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CommentList comments={this.state.comments} />
      </React.Fragment>
    );
  }
}

export default App;
