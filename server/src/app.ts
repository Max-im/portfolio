import express from 'express';
import { skillsRouter } from './routes/skills';
import { projectsRouter } from './routes/projects';

const app = express();
app.use(express.json());

app.use(skillsRouter);
app.use(projectsRouter);

export { app };
