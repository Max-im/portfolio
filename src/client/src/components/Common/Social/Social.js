import React, { Component } from "react";
import { connect } from "react-redux";
import SocialItem from "./SocialItem";
import { getSocial } from "../../../store/actions/social";
import "./style.scss";

export class Social extends Component {
  componentDidMount() {
    if (!this.props.social.social) this.props.getSocial();
  }

  render() {
    const { social, error } = this.props.social;
    return (
      <>
        {social && (
          <ul className="social">
            {social.map(item => (
              <SocialItem
                key={item.tooltip}
                classes={item.classes}
                path={item.paht}
                tooltip={item.tooltip}
              />
            ))}
          </ul>
        )}
        {error && <p className="error">{error}</p>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  social: state.social
});

export default connect(
  mapStateToProps,
  { getSocial }
)(Social);
