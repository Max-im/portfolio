import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";
import AuthMenu from "./AuthMenu";
import "./style.scss";

export class Aside extends Component {
  state = { showSubMenu: false };

  toggleSubMenu() {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  }

  static propTypes = {
    prop: PropTypes
  };

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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Aside);
