import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/posts";
import Post from "./Post";

function PostsList() {
const { id } = useParams();
const dispatch = useDispatch();

const posts = useSelector((state) => state.entities.posts.list.filter((post) => post.userId === parseInt(id)));

useEffect(() => {
  dispatch(loadPosts());
}, [id]);

return (
  <div>
    <div className="row">
      <h1 style={{textAlign:"center"}}>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post}  />
      ))}
    </div>
  </div>
);
}
export default PostsList;
