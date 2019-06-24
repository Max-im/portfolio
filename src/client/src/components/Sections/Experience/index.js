import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getExp } from "../../../store/actions/experience";
import ExpItem from "../../Items/ExpItem";

export class index extends Component {
  componentDidMount() {
    this.props.getExp();
  }

  static propTypes = {
    experience: PropTypes.object.isRequired,
    getExp: PropTypes.func.isRequired
  };

  render() {
    const { loading, exp } = this.props.experience;
    return (
      <section className="section">
        <h3 className="section__title">Experience</h3>

        <ul>
          {loading
            ? "Loading..."
            : exp.map(expItem => (
                <ExpItem key={expItem.id} expItem={expItem} />
              ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.experience
});

export default connect(
  mapStateToProps,
  { getExp }
)(index);
