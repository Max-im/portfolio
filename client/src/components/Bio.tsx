import React from 'react';

export interface IBio {
  name: string;
  photo: string;
  bio: string;
}

export default function Bio(params: { bio: IBio }) {
  const bio = params.bio;

  return (
    <>
      {bio && (
        <>
          <p>{bio.name}</p>
          <p>{bio.bio}</p>
          <img src={bio.photo} alt={bio.name} />
          <a target="_blank" rel="noreferrer" href="http://localhost:5000/assets/cv.pdf">CV</a>
        </>
      )}
    </>
  );
}
