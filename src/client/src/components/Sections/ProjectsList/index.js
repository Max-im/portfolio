import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import ProjectItem from "../../Items/ProjectItem";

export class index extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { projects } = this.props.portfolio;

    return (
      <section className="projectsList">
        <h3 className="projectsList__title">Projects list</h3>

        <div className="projectsList__body">
          {projects.map(item => (
            <ProjectItem item={item} key={item.id} />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {}
)(index);
