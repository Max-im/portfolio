import React from "react";
import CommentControl from "./CommentControl";

export default function index({ comment }) {
  return (
    <li className="comment">
      <div className="comment__meta">
        <p className="comment__date">{new Date(comment.date).toDateString()}</p>
        <CommentControl comment={comment} />
      </div>
      <div className="comment__body">
        <img className="comment__avatar" src={comment.avatar} alt="author" />
        <p className="comment__text">{comment.text}</p>
      </div>
    </li>
  );
}
