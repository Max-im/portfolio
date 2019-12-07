import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class index extends Component {
  state = { text: "", correcting: false };

  onCorrectStart() {
    this.setState({ correcting: true, text: this.props.text });
    setTimeout(() => this.inp.focus(), 0);
  }

  onCorrectEnd(e) {
    if (e) e.preventDefault();
    this.props.onUpdate(this.state.text, this.props.field);
    this.setState({ correcting: false, text: "" });
  }

  handleKeyDown(e) {
    if (e.key === "Enter") this.onCorrectEnd();
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isadmin } = this.props.auth.user;
    const { correcting, text: stateText } = this.state;
    const { text } = this.props;
    return (
      <>
        {isadmin ? (
          <div>
            {!correcting && (
              <p onClick={this.onCorrectStart.bind(this)}>{text}</p>
            )}
            {correcting && (
              <form onSubmit={this.onCorrectEnd.bind(this)}>
                <textarea
                  type="text"
                  ref={input => (this.inp = input)}
                  onChange={this.onChange.bind(this)}
                  onKeyDown={this.handleKeyDown.bind(this)}
                  value={stateText}
                  onBlur={this.onCorrectEnd.bind(this)}
                />
              </form>
            )}
          </div>
        ) : (
          <p>{text}</p>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(index);
