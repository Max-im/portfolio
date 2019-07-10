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
    e.preventDefault();
    this.props.onUpdate(this.state.text, this.props.field);
    this.setState({ correcting: false, text: "" });
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
      <div>
        {isadmin ? (
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
                  value={stateText}
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

export default connect(mapStateToProps)(index);
