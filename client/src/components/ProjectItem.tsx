import React from 'react'

export interface IProjectItem {
    name: string;
    photo: string;
    bio: string;
}

export default function ProjectItem(params: { project: IProjectItem }) {
  return (
    <>ProjectItem</>
  )
}
