import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getExp } from "../../../store/actions/experience";
import ExpItem from "../../Items/ExpItem";
import Spinner from "../../Common/Spinner";

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
      <section className="section">
        <div className="container">
          <h3 className="section__title">Experience</h3>

          <ul>
            {exp &&
              exp.map(expItem => (
                <ExpItem key={expItem.id} exp={expItem} isadmin={isadmin} />
              ))}
          </ul>

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
  { getExp }
)(index);
