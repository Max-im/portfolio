import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IBio {
  name: string;
  photo: string;
  bio: string;
}

export default function Bio() {
  const [bio, setBio] = useState<null|IBio>(null);
  const [error, setError] = useState<null|string>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/resume')
      .then(({ data }) => setBio(data))
      .catch(() => setError('error'));
  }, []);
  
  return (
    <>
      {bio && (
        <>
          <p>{bio.name}</p>
          <p>{bio.bio}</p>
          <img src={bio.photo} alt={bio.name} />
        </>
      )}
      {error && <>{error}</>}
    </>
  );
}
