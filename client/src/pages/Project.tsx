import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from '../components/ProjectItem';
import { useParams } from 'react-router-dom';

export default function Project() {
  const params = useParams();
  const [ready, setReady] = useState<boolean>(false);
  const [project, setProject] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get(`/project/${params.id}`)
      .then(({ data }) => {
        console.log(data)
        setProject(data.project);
        setComments(data.comments || []);
        setReady(true);
      })
      .catch((err) => setError(err.response.data.message));
  }, []);

  return (
    <>
      123
      {ready && (
        <>
          <ProjectItem project={project} />
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
}
