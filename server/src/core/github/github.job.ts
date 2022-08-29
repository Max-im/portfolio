import { CronJob } from 'cron';
import { githubController } from './github.controller';

class GithubJob {
	async execute() {
		githubController.execute();
		
		// const timing = process.env.DAILY_TIMING!;
		// const job = new CronJob(timing, githubController.execute, null, true);
		// job.start();
	}
}

const githubJob = new GithubJob();

export { githubJob };
