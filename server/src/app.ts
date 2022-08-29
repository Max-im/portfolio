import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { githubJob } from './core/github/github.job';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(router);

// githubJob.execute();

export { app };
