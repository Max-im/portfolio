import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import AdminSkillsCategories from "../../Sections/AdminSkillsCategories";
import AdminSkills from "../../Sections/AdminSkills";
import AddSkill from "../../Control/AddSkill";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="admin" />
      <div className="container">
        {/* skills categories */}
        <AdminSkillsCategories />
        {/* skills levels */}
        {/* skills type */}
        {/* skills */}
        <AdminSkills />
        {/* add skills */}
        <AddSkill />
      </div>
    </div>
  );
}
