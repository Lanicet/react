import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadComments } from "../store/comments";
import Comment from "./Comment";
const Post = (props) => {
  const { post } = props;
  const { id } = post;
  const [viewAll, setViewAll] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) =>
    state.entities.comments.list.filter((comment) => comment.postId === id)
  );
  useEffect(() => {
    dispatch(loadComments());
  }, []);

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div className="comments">
        <h2>Comments:</h2>
        {!viewAll
          ? comments
              .slice(0, 2)
              .map((comment) => <Comment key={comment.id} comment={comment} />)
          : comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
        <button
          className="btn btn-primary"
          onClick={() => setViewAll(!viewAll)}
        >
          {!viewAll ? "View all" : "View less"}
        </button>
      </div>
    </div>
  );
};
export default Post;
