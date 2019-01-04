import React from "react";

const CommentList = props => {
  return (
    <ul>
      Comment List
      {props.comments.map(comment => {
        return <li key={comment}>{comment}</li>;
      })}
    </ul>
  );
};

export default CommentList;
