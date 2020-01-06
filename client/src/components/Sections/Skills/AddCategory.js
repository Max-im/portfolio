import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../../Common/Input";
import { createCategory } from "../../../store/actions/skills";

export class index extends Component {
  state = {
    category: "",
    range: 0
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createCategory: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createCategory(this.state);
    this.setState({ category: "", range: 0 });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <>
        {user.isadmin && (
          <section className="section">
            <div className="container">
              <h3 className="section__title">Add category</h3>
              <form onSubmit={this.onSubmit.bind(this)}>
                <Input
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange.bind(this)}
                />

                <input
                  type="number"
                  value={this.state.range}
                  name="range"
                  min="0"
                  onChange={this.onChange.bind(this)}
                />
                <button type="submit">Add category</button>
              </form>
            </div>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { createCategory }
)(index);
