import React, { Component } from "react";

const CommentBox = props => {
  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <h4>Add a Comment</h4>
      <textarea onChange={e => props.handleChange(e)} value={props.comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
