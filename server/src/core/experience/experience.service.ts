import { Experience } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';

const logger = new Logger('experience');

class ExperienceService {
  async getData() {
    return Experience.findAll({order: [['id', 'DESC']]}).catch(err => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }
}

const experienceService = new ExperienceService();

export { experienceService };
