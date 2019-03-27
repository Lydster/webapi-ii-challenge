import React from "react";

import Post from "./post";

const PostList = props => {
  return (
    <div>
      <h1>postlist</h1>
      {props.posts.map(post => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default PostList;
