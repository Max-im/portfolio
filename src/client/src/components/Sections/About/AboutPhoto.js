import React, { Component } from "react";
import { connect } from "react-redux";

export class AboutPhoto extends Component {
  render() {
    const { photo, name } = this.props.summary;
    return (
      <>
        <div className="about__imgWrap">
          <img src={photo} alt="my photo" className="about__img" />
        </div>
        <h5 className="about__name">{name}</h5>
      </>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(mapStateToProps, {})(AboutPhoto);
