import React, { Component } from "react";
import UserMenu from "./UserMenu";
import PortfolioAside from "../PortfolioAside/PortfolioAside";

export default class SubMenu extends Component {
  render() {
    const { showSubMenu } = this.props;
    return (
      <div className={showSubMenu ? "submenu submenu_active" : "submenu"}>
        <UserMenu />
        <PortfolioAside />
      </div>
    );
  }
}
