import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getExp, deleteExp } from "../../../store/actions/experience";
import ExpItem from "../../Items/ExpItem";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getExp();
  }

  onDeleteExp(id) {
    if (window.confirm("Are you sure?")) this.props.deleteExp(id);
  }

  static propTypes = {
    experience: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getExp: PropTypes.func.isRequired,
    deleteExp: PropTypes.func.isRequired
  };

  render() {
    const { exp, error, loading } = this.props.experience;
    const { user } = this.props.auth;

    return (
      <section className="section">
        <div className="container">
          <h3 className="section__title">Experience</h3>

          {exp && (
            <ul>
              {exp.map(expItem => (
                <ExpItem
                  key={expItem.id}
                  expItem={expItem}
                  onDeleteExp={this.onDeleteExp.bind(this)}
                  isadmin={user.isadmin}
                />
              ))}
            </ul>
          )}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.experience,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getExp, deleteExp }
)(index);
