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
    setTimeout(() => {
      this.inp.focus();
    }, 0);
  }

  onCorrectEnd(e) {
    e.preventDefault();
    this.props.onUpdate(this.state.text);
    this.setState({ correcting: false, text: "" });
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
    const { correcting } = this.state;
    return (
      <div>
        {user.isadmin ? (
          <div>
            {!correcting && (
              <p onClick={this.onCorrectStart.bind(this)}>{text}</p>
            )}
            {correcting && (
              <form onSubmit={this.onCorrectEnd.bind(this)}>
                <input
                  type="text"
                  ref={input => (this.inp = input)}
                  onChange={this.onChange.bind(this)}
                  value={this.state.text}
                  onBlur={this.onCorrectEnd.bind(this)}
                />
              </form>
            )}
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
