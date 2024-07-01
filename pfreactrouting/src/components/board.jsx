import React from "react";
import PropTypes from "prop-types";
import "../components/css/boardnew.css";

function Board({ posts }) {
  if (!posts || !Array.isArray(posts)) {
    return <p>게시물 데이터를 불러오는 중 오류가 발생했습니다.</p>;
  }

  return (
    <div className="board-container">
      <h1>게시물 목록</h1>
      {posts.length === 0 ? (
        <p>작성된 게시물이 없습니다.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <div className="form-group">
                <label>제목:</label>
                <span>{post.title}</span>
              </div>
              <div className="form-group">
                <label>내용:</label>
                <span>{post.content}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Board.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Board;
