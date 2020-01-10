import React from 'react';
import Comment from "./Comment";

export default function Comments({ comments }) {
  return (
    <section className="section projectComments">
      <h3 className="section__title">Comments</h3>
      <ul>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </section>
  );
}
