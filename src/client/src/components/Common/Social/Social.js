import React from "react";
import SocialItem from "./SocialItem";
import "./style.scss";

export default function Social() {
  const arr = [
    {
      classes: "fab fa-facebook-square",
      path: "https://www.facebook.com/max.pozhidaev.7",
      tooltip: "Facebook"
    },
    {
      classes: "fab fa-linkedin",
      path: "https://www.linkedin.com/in/max-im",
      tooltip: "LinkedIn"
    },
    {
      classes: "fab fa-twitter-square",
      path: "https://twitter.com/MPozhidayev",
      tooltip: "Twitter"
    },
    {
      classes: "fab fa-github-square",
      path: "https://github.com/max-im",
      tooltip: "GitHub"
    },
    {
      classes: "fab fa-codepen",
      path: "https://codepen.io/max-im",
      tooltip: "CodePen"
    }
  ];
  return (
    <ul className="social">
      {arr.map(i => (
        <SocialItem classes={i.classes} path={i.paht} tooltip={i.tooltip} />
      ))}
    </ul>
  );
}
