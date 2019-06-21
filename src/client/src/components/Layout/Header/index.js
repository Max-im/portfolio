import React from "react";
import "./style.scss";
import MainMenu from "../MainMenu";
import AuthMenu from "../AuthMenu";

export default function index() {
  return (
    <header className="header">
      <div className="container header__container">
        <MainMenu />
        <AuthMenu />
      </div>
    </header>
  );
}
