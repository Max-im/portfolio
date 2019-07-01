import React from "react";
import "./style.scss";

export default function index({ comment }) {
  return (
    <li className="comment">
      <div className="comment__user">
        <img
          className="comment__avatar"
          src={comment.avatar}
          alt={comment.name}
        />
        <p className="comment__name">{comment.name}</p>
      </div>
      <div className="comment__body">
        <p className="comment__text">{comment.text}</p>
      </div>
    </li>
  );
}