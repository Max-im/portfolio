import cron from 'node-cron';
import { githubService } from '../core/github/github-service';

const getGithubData = () => {
  // cron.schedule('5 * * * *', githubService.start);
  githubService.start()
}

export {getGithubData}