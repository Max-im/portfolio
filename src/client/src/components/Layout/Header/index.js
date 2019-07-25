import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import MainMenu from "../MainMenu";
import AuthMenu from "../AuthMenu";
import { onScroll } from "../../../store/actions/general";

export class index extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.props.onScroll(window.scrollY);
  };

  static propTypes = {
    onScroll: PropTypes.func.isRequired,
    general: PropTypes.object.isRequired
  };

  render() {
    const { scrollY } = this.props.general;
    return (
      <header className={scrollY > 50 ? "header header__scrolled" : "header"}>
        <div className="container header__container">
          <MainMenu />
          <AuthMenu />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  general: state.general
});

export default connect(
  mapStateToProps,
  { onScroll }
)(index);
