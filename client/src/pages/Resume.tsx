import React from 'react'
import Bio from '../components/Bio'
import EducationList from '../components/EducationList'
import ExperienceList from '../components/ExperienceList'
import SkillsList from '../components/SkillsList'

export default function Resume() {
  return (
    <>
      <Bio />
      <SkillsList />
      <EducationList />
      <ExperienceList />
    </>
  )
}
