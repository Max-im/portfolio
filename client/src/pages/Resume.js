import React from 'react';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function Resume() {
  return (
    <>
      <Bio/>
      <Skills/>
      <Experience/>
      <Education/>
    </>
  );
}
