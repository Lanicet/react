import React from "react";

function Comment(props) {
  const { comment } = props;
  return <div className="comment">
    <b>{comment.name}</b>
    <p>{comment.email} </p>
    <p>{comment.body}</p>
  </div>;
}

export default Comment;
