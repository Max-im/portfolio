import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contacts from "../../Sections/Contacts";
import Skills from "../../Sections/Skills";
import Experience from "../../Sections/Experience";
import Summary from "../../Sections/Summary";
import Education from "../../Sections/Education";
import PageTitle from "../../Common/PageTitle";
import AddEdu from "../../Control/AddEdu";
import AddExp from "../../Control/AddExp";
import AddSkill from "../../Control/AddSkill";
import AddCategory from "../../Control/AddCategory";
import "./style.scss";

export class index extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isadmin } = this.props.auth.user;
    return (
      <div className="page">
        <PageTitle text="resume" />

        {/* summary */}
        <Summary />

        {/* contacts */}
        <Contacts />

        {/* TODO add contact */}

        {/* skills */}
        <Skills />

        {/* add category */}
        {isadmin && <AddCategory />}

        {/* add skill */}
        {isadmin && <AddSkill />}

        {/* experience */}
        <Experience />

        {/* add exp */}
        {isadmin && <AddExp />}

        {/* education */}
        <Education />

        {/* add edu */}
        {isadmin && <AddEdu />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(index);
