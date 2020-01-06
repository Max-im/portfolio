import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getExp } from "../../../store/actions/experience";
import ExpItem from "./ExpItem";
import AddExp from "./AddExp";
import Spinner from "../../Common/Spinner";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getExp();
  }

  static propTypes = {
    experience: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getExp: PropTypes.func.isRequired
  };

  render() {
    const { exp, error, loading } = this.props.experience;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section exp">
        <div className="container">
          <h3 className="section__title">Experience</h3>

          <ul className="exp__list">
            {exp &&
              exp.map(expItem => (
                <ExpItem key={expItem.id} exp={expItem} isadmin={isadmin} />
              ))}
          </ul>

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
        {isadmin && <AddExp />}
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
  { getExp }
)(index);
