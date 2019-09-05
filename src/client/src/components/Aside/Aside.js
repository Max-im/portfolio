import React, { Component } from "react";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";
import AuthMenu from "./AuthMenu";
import "./style.scss";

export default class Aside extends Component {
  state = { showSubMenu: false };

  toggleSubMenu() {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  }

  render() {
    const { showSubMenu } = this.state;
    return (
      <aside className="aside">
        <MainMenu
          toggleSubMenu={this.toggleSubMenu.bind(this)}
          showSubMenu={showSubMenu}
        />
        <AuthMenu />
        <SubMenu showSubMenu={showSubMenu} />
      </aside>
    );
  }
}
