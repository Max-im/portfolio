import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class index extends Component {
  state = {
    text: "",
    correcting: false
  };

  onCorrectStart() {
    this.setState({ correcting: true, text: this.props.text });
  }

  onCorrectEnd() {
    this.setState({ correcting: false, text: "" });
    this.props.onUpdate(this.state.text);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props.auth;
    const { text } = this.props;
    return (
      <div>
        {user.isadmin ? (
          <div>
            <p
              className={this.state.correcting ? "hide" : ""}
              onClick={this.onCorrectStart.bind(this)}
            >
              {text}
            </p>
            <input
              type="text"
              onChange={this.onChange.bind(this)}
              className={this.state.correcting ? "" : "hide"}
              value={this.state.text}
              onBlur={this.onCorrectEnd.bind(this)}
            />
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(index);
