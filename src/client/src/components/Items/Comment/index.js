import React from "react";
import "./style.scss";
import FormatedDate from "../../Common/FormatedDate";

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
        <FormatedDate date={comment.date} clasName="comment__date" />
      </div>
    </li>
  );
}
