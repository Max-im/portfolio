import React from "react";
import "./style.scss";
import MainMenu from "../MainMenu";

export default function index() {
  return (
    <header className="header">
      <div className="container">
        <MainMenu />
      </div>
    </header>
  );
}
