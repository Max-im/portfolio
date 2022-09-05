import { CronJob } from 'cron';
import { cvController } from './cv.controller';

class CvJob {
	async execute() {
		cvController.execute();
		
		// const timing = process.env.DAILY_TIMING!;
		// const job = new CronJob(timing, cvController.execute, null, true);
		// job.start();
	}
}

const cvJob = new CvJob();

export { cvJob };
