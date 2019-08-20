import React, { Component } from "react";
import UserMenu from "./UserMenu";

export default class SubMenu extends Component {
  render() {
    const { showSubMenu } = this.props;
    return (
      <div className={showSubMenu ? "submenu submenu_active" : "submenu"}>
        <UserMenu />
      </div>
    );
  }
}
