import React from "react";

export default function index({ comment }) {
  const photo = comment.avatar ? comment.avatar : "/photo/null";
  return (
    <li className="comment">
      <div className="comment__meta">
        <p className="comment__date">{new Date(comment.date).toDateString()}</p>
      </div>
      <div className="comment__body">
        <img className="comment__avatar" src={photo} alt="author" />
        <p className="comment__text">{comment.text}</p>
      </div>
    </li>
  );
}
