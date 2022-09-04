import { Education } from '../../data/models';
import { ApiError } from '../../exceptions/errors';
import { Logger } from '../../logger';

const logger = new Logger('education');

class EducationService {
  async getData() {
    return Education.findAll({
      attributes: ['id', 'from', 'to', 'icon', 'organisation', 'description'],
    }).catch((err) => {
      logger.error(err.message);
      throw ApiError.internal();
    });
  }
}

const educationService = new EducationService();

export { educationService };
