import React, { Component } from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import Social from "../../Common/Social/Social";
import Spinner from "../../Common/Spinner";
import { getAbout } from "../../../store/actions/resume";
import "../../../sass/about.scss";

export class About extends Component {
  componentDidMount() {
    if (!this.props.about.isReady) {
      this.props.getAbout();
    }
  }

  render() {
    const { about } = this.props;
    return (
      <section className="section about">
        <div className="container">
          <h3 className="section__title">About</h3>
          {about.isReady && (
            <div className="about__body">
              <div className="about__photoBlock">
                <div className="about__imgWrap">
                  <img
                    src={"/photo/" + about.avatar}
                    alt="my photo"
                    className="about__img"
                  />
                </div>
                <h5 className="about__name">
                  {about.name} {about.lastName}
                </h5>
                <Contacts contacts={about.contacts} />
                <Social social={about.social} />
              </div>

              <div className="about__describeBlock">{about.summary}</div>
            </div>
          )}
        </div>
        {!about.isReady && <Spinner />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, { getAbout })(About);
