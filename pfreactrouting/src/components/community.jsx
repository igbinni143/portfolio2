import React, { useState } from "react";
import PropTypes from "prop-types";
import "../components/css/post.css";

function Community({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="community-container">
      <h1>게시판 글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

Community.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Community;
