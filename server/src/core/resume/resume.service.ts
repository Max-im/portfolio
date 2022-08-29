import { Resume } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';

const logger = new Logger('resume');

class ResumeService {
  getData() {
    return Resume.findOne().catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }
}

const resumeService = new ResumeService();

export { resumeService };
