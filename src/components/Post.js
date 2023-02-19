import React from "react";
import "./post.css";
const Post = (props) => {
  return (
    <div className="post">
      <img src={props.img} />
      <p>User ID :{props.userId}</p>
      <p>title : {props.title}</p>
      <p>Likes :{props.like} </p>
      <button className="like-btn" onClick={props.handlelike}>
        Like post
      </button>
    </div>
  );
};

export default Post;
