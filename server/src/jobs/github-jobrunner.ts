import cron from 'node-cron';
import { githubService } from '../core/github/github-service';

const getGithubData = () => {
  cron.schedule('* * * * *', githubService.start);
}

export {getGithubData}