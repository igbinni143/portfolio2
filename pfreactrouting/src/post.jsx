import React, { useState } from "react";
import Community from "./components/community";
import Board from "./components/board";

function Post() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { title, content };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <Community addPost={addPost} />
      <Board posts={posts} />
    </div>
  );
}

export default Post;
