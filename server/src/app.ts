import express from 'express';
import { skillsRouter } from './routes/skills';
import { projectsRouter } from './routes/projects';
import { getGithubData } from './jobs/github'

const app = express();
app.use(express.json());

app.use(skillsRouter);
app.use(projectsRouter);
getGithubData()

export { app };
